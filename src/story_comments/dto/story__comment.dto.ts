import { PartialType } from '@nestjs/mapped-types';
import { CreateNewsCommentDto } from './story_comment.dto';

export class UpdateNewsCommentDto extends PartialType(CreateNewsCommentDto) {}
