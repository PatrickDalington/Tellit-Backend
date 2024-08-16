import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

// src/user/dto/reset-password.dto.ts
export class ResetPasswordDto {
  @IsString()
  @IsOptional()
  token?: string;

  @IsString()
  @IsNotEmpty()
  newPassword: string;
}
