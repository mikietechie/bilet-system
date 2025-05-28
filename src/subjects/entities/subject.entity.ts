import { List } from 'src/lists/entities/list.entity';
import { Note } from 'src/notes/entities/note.entity';
import { BaseEntity } from 'src/utils/base.utils';
import { Entity, Column, OneToMany, JoinColumn } from 'typeorm';

@Entity()
export class Subject extends BaseEntity {
  @Column({ length: 500, unique: true })
  name: string;

  @OneToMany(() => List, (list) => list.subject)
  @JoinColumn()
  lists: List[];

  @OneToMany(() => Note, (note) => note.subject)
  @JoinColumn()
  notes: Note[];
}
