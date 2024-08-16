import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { compare } from 'bcrypt';
import { BadRequestException } from '@nestjs/common';
import { LoginDto } from './dto/auth.dto';
import { User } from '../user/entities/user.entity';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private readonly authRepository,
    private jwtService: JwtService,
  ) {}

  async login(dto: LoginDto) {
    const user = await this.validateUser(dto);

    const payload = {
      email: user.email,
      sub: user.id,
    };

    const access_token = await this.jwtService.signAsync(payload, {
      expiresIn: '1h',
      secret: process.env.jwtSecretKey,
    });

    return { user, access_token };
  }

  async validateUser(dto: LoginDto) {
    const user = await this.authRepository.findOne({
      where: { email: dto.email },
    });

    if (user && (await compare(dto.password, user.password))) {
      const { ...result } = user;
      return result;
    }
    throw new BadRequestException('Invalid credentials');
  }

  async refreshToken(user: any) {
    const payload = { email: user.email, sub: user.id };

    return {
      refresh_token: await this.authRepository.jwtService.signAsync(payload, {
        expiresIn: '7d',
        secret: process.env.jwtRefreshTokenKey,
      }),
    };
  }
}
