import {
  Controller,
  Get,
  Post,
  Body,
  Query,
  BadRequestException,
  Delete,
  Param,
  UseGuards,
  Req,
} from '@nestjs/common';
import { StoryCommentsService } from './story_comments.service';
import { CreateNewsCommentDto } from './dto/story_comment.dto';
import { JwtGuard } from 'src/auth/guard/jwt.guard';

@Controller(':newsId/reply')
export class StoryCommentsController {
  constructor(private readonly newsCommentsService: StoryCommentsService) {}

  @Post()
  @UseGuards(JwtGuard)
  async create(
    @Query() queryParams,
    @Param('newsId') newsId: string,
    @Req() request: any,
    @Body() createNewsCommentDto: CreateNewsCommentDto,
  ) {
    if (queryParams.parentId) {
      createNewsCommentDto.parentId = queryParams.parentId;
    }
    createNewsCommentDto.newsId = newsId;
    createNewsCommentDto.userId = request.user.userId;
    return this.newsCommentsService.create(createNewsCommentDto);
  }

  @Get()
  async findAll(@Param('newsId') newsId: string, @Query() queryParams) {
    if (queryParams.parentId) {
      try {
        return await this.newsCommentsService.getCommentsByParentId(
          queryParams.parentId,
        );
      } catch (error) {
        throw new BadRequestException('Error occured', {
          cause: new Error(),
          description: 'Invalid query parameters',
        });
      }
    }
    return await this.newsCommentsService.getTopLevelComments(newsId);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.newsCommentsService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.newsCommentsService.remove(id);
  }

  // @Patch('/:id')
  // update(
  //   @Param('id') id: string,
  //   @Body() updateNewsCommentDto: UpdateNewsCommentDto,
  // ) {
  //   return this.newsCommentsService.update(+id, updateNewsCommentDto);
  // }
}
