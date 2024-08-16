import { Test, TestingModule } from '@nestjs/testing';
import { StoryCommentsService } from './story_comments.service';
import { StoryCommentsController } from './story_comments.controller';

describe('StoryCommentsController', () => {
  let controller: StoryCommentsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StoryCommentsController],
      providers: [StoryCommentsService],
    }).compile();

    controller = module.get<StoryCommentsController>(StoryCommentsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
