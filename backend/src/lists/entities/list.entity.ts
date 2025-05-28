import { Examination } from 'src/examinations/entities/examination.entity';
import { Question } from 'src/questions/entities/question.entity';
import { Subject } from 'src/subjects/entities/subject.entity';
import { Ticket } from 'src/tickets/entities/ticket.entity';
import { BaseEntity } from 'src/utils/base.utils';
import { Entity, Column, ManyToOne, JoinColumn, OneToMany } from 'typeorm';

@Entity()
export class List extends BaseEntity {
  @Column({ length: 500, unique: true })
  name: string;

  @OneToMany(() => Question, (question) => question.list)
  @JoinColumn()
  questions: Question[];

  @OneToMany(() => Examination, (examination) => examination.list)
  @JoinColumn()
  examinations: Examination[];

  @OneToMany(() => Ticket, (ticket) => ticket.list)
  @JoinColumn()
  tickets: Ticket[];

  @ManyToOne(() => Subject, (subject) => subject.id)
  @JoinColumn()
  subject: Subject;
}
