import { IsString, IsOptional } from 'class-validator';

export class CreateNewsCommentDto {
  @IsString()
  reply: string;

  @IsOptional()
  @IsString()
  parentId?: string;

  @IsString()
  @IsOptional()
  newsId?: string;

  @IsString()
  @IsOptional()
  userId?: string;
}
