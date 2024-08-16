import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { StoryComment } from '../../story_comments/entities/story_comment.entity';
import { Story } from '../../story/entities/story.entity';
// import { ForumTopicsComment } from 'src/forum_topics_comments/entities/forum_topics_comment.entity';
// import { NewsLike } from 'src/news_likes/entities/news_like.entity';
// import { ForumTopicsLike } from '../../forum_topics_likes/entities/forum_topics_like.entity';
// import { ForumTopic } from 'src/forum_topics/entities/forum_topic.entity';
// import { News } from 'src/news/entities/news.entity';
// import { Ad } from 'src/ads/entities/ad.entity';
// import { Story } from 'src/story/entities/story.entity';
@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @OneToMany(() => StoryComment, (Newscomment) => Newscomment.user)
  Newscomment: StoryComment[];

  // @OneToMany(() => Ad, (Ad) => Ad.user)
  // Ad: Ad[];

  // @OneToMany(
  //   () => ForumTopicsComment,
  //   (forumTopicComment) => forumTopicComment.user,
  // )
  // forumTopicComment: ForumTopicsComment[];

  // @OneToMany(() => ForumTopicsLike, (forumTopicLike) => forumTopicLike.user)
  // forumTopicLike: ForumTopicsLike[];

  // @OneToMany(() => NewsLike, (newsLike) => newsLike.user)
  // newsLike: NewsLike[];

  // // @OneToMany(() => ForumTopic, (forumTopic) => forumTopic.user)
  // forumTopic: ForumTopic[];

  @OneToMany(() => StoryComment, (stories) => stories.user)
  stories: Story[];

  @Column({ nullable: true })
  resetToken: string;

  @Column({ nullable: true })
  resetTokenExpiry: Date;
}
