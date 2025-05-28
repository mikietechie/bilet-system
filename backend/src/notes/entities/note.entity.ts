import { Subject } from 'src/subjects/entities/subject.entity';
import { BaseEntity } from 'src/utils/base.utils';
import { Entity, Column, ManyToOne, JoinColumn } from 'typeorm';

@Entity()
export class Note extends BaseEntity {
  @Column({ length: 500, unique: true })
  name: string;

  @ManyToOne(() => Subject, (subject) => subject.id)
  @JoinColumn()
  subject: Subject;
}
