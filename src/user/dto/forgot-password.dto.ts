import { IsEmail, IsNotEmpty } from 'class-validator';

// src/user/dto/forgot-password.dto.ts
export class ForgotPasswordDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;
}
