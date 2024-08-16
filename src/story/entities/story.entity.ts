import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { StoryComment } from '../../story_comments/entities/story_comment.entity';

@Entity('stories')
export class Story {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 30 })
  title: string;

  @Column({ type: 'varchar', length: 150 })
  desc: string;

  @Column({ type: 'varchar' })
  content: string;

  @Column({ type: 'varchar', length: 255 })
  coverImageUrl: string;

  @Column({ type: 'varchar', length: 255 })
  storyImageUrl: string;

  @Column({ type: 'varchar', length: 40 })
  slug: string;

  @Column({ type: 'varchar', length: 30 })
  copyright: string;

  @Column({ type: 'varchar', length: 40 })
  category: string;

  @Column({ type: 'varchar', length: 30 })
  audience: string;

  @Column({ type: 'varchar', length: 30 })
  part: string;

  @Column({ default: () => 'gen_random_uuid()' })
  storyId: string;

  @Column({ type: 'varchar', length: 225 })
  posterUid: string;

  @OneToMany(() => StoryComment, (comment) => comment.stories)
  storyComments: StoryComment[];
}
