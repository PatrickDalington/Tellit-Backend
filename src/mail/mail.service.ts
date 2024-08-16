import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { CreateUserDto } from 'src/user/dto/create-user.dto';

@Injectable()
export class MailService {
  constructor(private mailerService: MailerService) {}

  // async sendADEmailConfirmation(ad: CreateAdDto, token: string, isAdEmail) {
  //   if (!ad) {
  //     return;
  //   }
  //   const url = `aquatrack.com/auth/confirm?token=${token}`;

  //   await this.mailerService.sendMail({
  //     to: ad.Email,
  //     subject: 'Confirmation: Ad Submission on Aquatrack',
  //     template: './confirmation',
  //     context: {
  //       name: ad.lastName,
  //       logo: 'https://aquatrack-management.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.289a421a.png&w=384&q=75',
  //       url,
  //       email: 'aquatrack@support.com',
  //       sendAdEmail: isAdEmail,
  //       link: 'https://aquatrack-management.vercel.app',
  //     },
  //   });
  // }

  async sendAuthEmailConfirmation(
    user: CreateUserDto,
    token: string,
    isWelcomeEmail: boolean,
  ) {
    if (!user) {
      return;
    }
    const url = `aquatrack.com/auth/confirm?token=${token}`;

    await this.mailerService.sendMail({
      to: user.email,
      subject: 'Welcome to Tellit',
      template: './confirmation',
      context: {
        name: user.lastName,
        logo: 'https://aquatrack-management.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.289a421a.png&w=384&q=75',
        url,
        email: 'aquatrack@support.com',
        sendUserWelcome: isWelcomeEmail,
        link: 'https://aquatrack-management.vercel.app',
      },
    });
  }

  async sendPasswordResetEmail(email: string, resetUrl: string) {
    const mailOptions = {
      to: email,
      subject: 'Password Reset',
      template: './confirmation',
      context: {
        resetUrl: resetUrl,
        email: email,
      },
    };

    await this.mailerService.sendMail(mailOptions);
  }
}
