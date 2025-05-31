import { Question } from 'src/questions/entities/question.entity';
import { User } from 'src/users/entities/user.entity';
import { BaseEntity } from 'src/utils/base.utils';
import { Entity, Column, ManyToOne, JoinColumn } from 'typeorm';

@Entity()
export class Answer extends BaseEntity {
  @Column({ length: 512 })
  title: string;

  @Column({ length: 8192, nullable: true })
  text: string;

  @ManyToOne(() => Question, (question) => question.id)
  @JoinColumn()
  question: Question;

  @ManyToOne(() => User, (owner) => owner.id)
  @JoinColumn()
  owner: User;
}
