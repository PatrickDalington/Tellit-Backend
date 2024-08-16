import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateUserDto } from '../user/dto/create-user.dto';
import { hash } from 'bcrypt';
//import * as nodemailer from 'nodemailer';
import { MailService } from '../mail/mail.service';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { randomBytes } from 'crypto';
import { MoreThan } from 'typeorm';
import { ForgotPasswordDto } from './dto/forgot-password.dto';
import { ResetPasswordDto } from './dto/reset-password.dto';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository,
    private mailService: MailService,
    private authService: AuthService,
  ) {}

  async create(createUserDto: CreateUserDto) {
    // Validate email
    if (!validateEmail(createUserDto.email)) {
      return 'Email incorrect';
    } else if (!createUserDto.email) {
      return 'Email is required';
    }

    // Check if email is already in use
    const existingUser = await this.userRepository.findOne({
      where: { email: createUserDto.email },
    });
    if (existingUser) {
      throw new ConflictException(
        `Email ${createUserDto.email} is already in use`,
      );
    }
    // Hash password
    createUserDto.password = await hash(createUserDto.password, 10);

    // saving user to database
    const user = this.userRepository.create(createUserDto);
    const newUser = this.userRepository.save(user);

    if (newUser) {
      // Sending  email to user for signing up
      const token = Math.floor(1000 + Math.random() * 9000).toString();
      await this.mailService.sendAuthEmailConfirmation(
        createUserDto,
        token,
        true,
      );
    }

    return `${createUserDto.email} has been registered successfully. Welcome email has been sent`;
  }

  async findAll() {
    return await this.userRepository.find();
  }

  async findByEmail(email: string) {
    const user = await this.userRepository.findOne({ where: { email } });
    if (!user) {
      throw new ConflictException(`User with email ${email} does not exist`);
    }
    return user;
  }

  async forgotPassword(forgotPasswordDto: ForgotPasswordDto) {
    const { email } = forgotPasswordDto;
    const user = await this.userRepository.findOne({ where: { email } });
    if (!user) {
      throw new NotFoundException(`User with email ${email} not found`);
    }

    const resetToken = randomBytes(32).toString('hex');
    const resetTokenExpiry = new Date(Date.now() + 3600000); // 1 hour expiry

    user.resetToken = resetToken;
    user.resetTokenExpiry = resetTokenExpiry;

    await this.userRepository.save(user);

    const resetUrl = `${process.env.FRONTEND_URL}/reset-password?token=${resetToken}`;
    await this.mailService.sendPasswordResetEmail(user.email, resetUrl);
    return 'Password reset email sent';
  }

  async resetPassword(resetPasswordDto: ResetPasswordDto) {
    const { token, newPassword } = resetPasswordDto;
    const user = await this.userRepository.findOne({
      where: { resetToken: token, resetTokenExpiry: MoreThan(new Date()) },
    });
    if (!user) {
      throw new ConflictException('Invalid or expired token');
    }

    user.password = await hash(newPassword, 10);
    user.resetToken = null;
    user.resetTokenExpiry = null;
    await this.userRepository.save(user);

    return { message: 'Password reset successful' };
  }

  async remove(id: string) {
    const user = await this.userRepository.findOne({ where: { id } });
    if (!user) {
      throw new ConflictException(`User with id ${id} does not exist`);
    }

    await this.userRepository.delete(id);
    return `User with id ${id} has been removed`;
  }
}

function validateEmail(email: string) {
  // Regular expression for email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// function sendEmail(email: string, message: string) {
//   // Create a transporter object using SMTP transport
//   const transporter = nodemailer.createTransport({
//     service: 'Gmail',
//     auth: {
//       user: process.env.MAIL_USER,
//       pass: process.env.MAIL_PASSWORD,
//     },
//   });

//   // Email content
//   const mailOptions = {
//     from: process.env.MAIL_FROM, // Sender address
//     to: email, // Recipient address
//     subject: 'Email Verificationl', // Subject line
//     text: message,
//   };

//   // Send email
//   transporter.sendMail(mailOptions, (error) => {
//     if (error) {
//       return false;
//     } else {
//       return true;
//     }
//   });

//   return false;
// }
