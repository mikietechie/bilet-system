import { Question } from 'src/questions/entities/question.entity';
import { BaseEntity } from 'src/utils/base.utils';
import { Entity, Column, ManyToOne, JoinColumn } from 'typeorm';

@Entity()
export class Answer extends BaseEntity {
  @Column({ length: 500, unique: true })
  name: string;

  @ManyToOne(() => Question, (question) => question.id)
  @JoinColumn()
  question: Question;
}
