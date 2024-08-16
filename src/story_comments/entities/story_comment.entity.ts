import { Story } from '../../story/entities/story.entity';
import { User } from '../../user/entities/user.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  CreateDateColumn,
  JoinColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'storyComments' })
export class StoryComment {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  reply: string;

  //user relation
  @ManyToOne(() => User, (user) => user.Newscomment, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'user_id' })
  user: User;
  @Column({ name: 'user_id' })
  userId: string;

  //story relation
  @ManyToOne(() => Story, (story) => story.storyComments)
  @JoinColumn({ name: 'story_id' })
  stories: Story;
  @Column({ name: 'story_id' })
  storyId: string;

  // parentComment relation
  @ManyToOne(() => StoryComment, { onDelete: 'CASCADE', nullable: true })
  @JoinColumn({ name: 'parent_id' })
  parentComment: StoryComment;
  @Column({ name: 'parent_id', nullable: true })
  parentId: string;

  @CreateDateColumn({ type: 'timestamp' })
  createdDate: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedDate: Date;
}
