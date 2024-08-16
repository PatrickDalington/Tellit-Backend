import { Injectable } from '@nestjs/common';
import { CreateStoryDto } from './dto/create-story.dto';
import { UpdateStoryDto } from './dto/update-story.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Story } from './entities/story.entity';
import { Repository } from 'typeorm';

@Injectable()
export class StoryService {
  constructor(
    @InjectRepository(Story)
    private readonly storyRepository: Repository<Story>,
  ) {}

  async create(createStoryDto: CreateStoryDto) {
    const existStory = await this.validateStory(createStoryDto);

    if (existStory === null) {
      const story = this.storyRepository.create(createStoryDto);
      const result = this.storyRepository.save(story);
      return result;
    }
    return 'Story already exist';
  }

  findAll() {
    return this.storyRepository.find();
  }

  findOne(title: string) {
    return this.storyRepository.findOne({ where: { title } });
  }

  update(id: string, updateStoryDto: UpdateStoryDto) {
    return this.storyRepository.update(id, updateStoryDto);
  }

  async validateStory(storyDto: CreateStoryDto) {
    const story = await this.storyRepository.findOne({
      where: { title: storyDto.title },
    });

    if (story == null) {
      return null;
    }
    return 'Story with this title already exist in the database';
  }

  remove(id: string): Promise<{ affected?: number }> {
    return this.storyRepository.delete(id);
  }
}
