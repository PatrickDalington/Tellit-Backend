import { IsNotEmpty, IsOptional, IsString, MinLength } from 'class-validator';
import { PrimaryGeneratedColumn } from 'typeorm';

export class CreateStoryDto {
  @PrimaryGeneratedColumn()
  id: string;

  @IsString()
  @MinLength(6, { message: 'Title must have at least 6 characters.' })
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  @MinLength(10, { message: 'Username must have atleast 10 characters.' })
  desc: string;

  @IsNotEmpty()
  @MinLength(50, {
    message: 'The content of your story must be atleast 50 characters.',
  })
  content: string;

  @IsString()
  part: string;

  @IsNotEmpty()
  coverImageUrl: string;

  @IsNotEmpty()
  storyImageUrl: string;

  @IsNotEmpty()
  copyright: string;

  @IsNotEmpty()
  audience: string;

  @IsString()
  @IsOptional()
  storyId: string;

  @IsString()
  category: string;

  @IsString()
  slug: string;

  @IsString()
  posterUid: string;
}
