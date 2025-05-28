import { List } from 'src/lists/entities/list.entity';
import {
  Entity,
  Column,
  ManyToOne,
  JoinColumn,
  ManyToMany,
  OneToMany,
} from 'typeorm';
import { Question } from 'src/questions/entities/question.entity';
import { Mark } from 'src/marks/entities/mark.entity';
import { BaseEntity } from 'src/utils/base.utils';

@Entity()
export class Ticket extends BaseEntity {
  @Column({ length: 500, unique: true })
  name: string;

  @ManyToOne(() => List, (list) => list.id)
  @JoinColumn()
  list: List;

  @ManyToMany(() => Question, (question) => question.id)
  @JoinColumn()
  quesstions: Question[];

  @OneToMany(() => Mark, (mark) => mark.ticket)
  @JoinColumn()
  marks: Mark[];
}
