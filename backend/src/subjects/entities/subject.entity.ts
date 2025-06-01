import { List } from 'src/lists/entities/list.entity';
import { Note } from 'src/notes/entities/note.entity';
import { BaseEntity } from 'src/utils/base.utils';
import { Entity, Column, OneToMany, JoinColumn } from 'typeorm';

export enum SubjectLevel {
  BACHELORS = 'Barchelors',
  MASTERS = 'Masters',
  DOCTORATE = 'Doctorate',
}

@Entity()
export class Subject extends BaseEntity {
  @Column({ length: 512, unique: true })
  name: string;

  @Column({
    type: 'enum',
    enum: SubjectLevel,
    default: SubjectLevel.BACHELORS,
  })
  level: SubjectLevel;

  @OneToMany(() => List, (list) => list.subject)
  @JoinColumn()
  lists: List[];

  @OneToMany(() => Note, (note) => note.subject)
  @JoinColumn()
  notes: Note[];
}
