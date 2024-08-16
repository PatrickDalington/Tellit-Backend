import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';
import { StoryComment } from './entities/story_comment.entity';
import { JwtService } from '@nestjs/jwt';
import { StoryCommentsController } from './story_comments.controller';
import { StoryCommentsService } from './story_comments.service';

@Module({
  imports: [TypeOrmModule.forFeature([StoryComment])],
  controllers: [StoryCommentsController],
  providers: [StoryCommentsService, JwtService],
})
export class NewsCommentsModule {}
