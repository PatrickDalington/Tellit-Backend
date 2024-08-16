import {
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateNewsCommentDto } from './dto/story_comment.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { StoryComment } from './entities/story_comment.entity';
import { IsNull, Repository } from 'typeorm';
import { User } from 'src/user/entities/user.entity';

@Injectable()
export class StoryCommentsService {
  constructor(
    @InjectRepository(StoryComment)
    private readonly StoryCommentRepository: Repository<StoryComment>,
  ) {}

  async create(createNewsCommentDto: CreateNewsCommentDto) {
    const createComment =
      this.StoryCommentRepository.create(createNewsCommentDto);
    return await this.StoryCommentRepository.save(createComment);
  }

  async findAll(storyId: string) {
    return await this.StoryCommentRepository.find({
      where: { storyId },
      relations: {
        user: true,
        parentComment: true,
        stories: true,
      },
      order: {
        createdDate: 'ASC',
      },
    });
  }

  getTopLevelComments(storyId: string) {
    return this.StoryCommentRepository.find({
      where: { storyId, parentId: IsNull() },
      relations: {
        user: true,
        parentComment: true,
        stories: true,
      },
    });
  }

  getCommentsByParentId(parentId: string) {
    return this.StoryCommentRepository.find({
      where: { parentId: parentId },
      relations: {
        user: true,
        parentComment: true,
        stories: true,
      },
    });
  }

  async findOne(id: string): Promise<StoryComment> {
    const newsComment = await this.StoryCommentRepository.findOne({
      where: {
        id,
      },
      relations: {
        user: true,
        parentComment: true,
        stories: true,
      },
    });
    if (!newsComment) {
      throw new NotFoundException(`News comment with ID ${id} not found.`);
    }
    return newsComment;
  }

  async remove(id, user?: User): Promise<void> {
    const deleteComment = await this.StoryCommentRepository.findOne({
      where: id,
    });
    if (!deleteComment) {
      throw new NotFoundException(`Comment with ID ${id} not found.`);
    }

    if (deleteComment.user.id !== user.id) {
      throw new ForbiddenException(
        'You are not authorized to delete this comment.',
      );
    }
    console.log(`item id ${id} deleted successfully`);
    await this.StoryCommentRepository.remove(deleteComment);
  }
  // async update(
  //   id,
  //   updateNewsCommentDto: UpdateNewsCommentDto,
  //   user?: User,
  // ): Promise<NewsComment> {
  //   const { content, parentId } = updateNewsCommentDto;
  //   const updateComment = await this.NewsCommentRepository.findOne({
  //     where: id,
  //   });
  //   if (!updateComment) {
  //     throw new NotFoundException(`Comment with ID ${id} not found.`);
  //   }
  //   if (updateComment.user.id !== user.id) {
  //     throw new ForbiddenException(
  //       'You are not authorized to update this comment.',
  //     );
  //   }
  //   let parentsComment: News | null = null;
  //   if (parentId) {
  //     parentsComment = await this.NewsCommentRepository.findOne({where: parentId});
  //     if (!parentsComment) {
  //       throw new NotFoundException(
  //         `Parent comment with ID ${parentId} not found.`,
  //       );
  //     }
  //   }
  //   updateComment.content = content;
  //   updateComment.parentsComment = parentsComment;

  //   return this.NewsCommentRepository.save(updateComment);
  // }
}
