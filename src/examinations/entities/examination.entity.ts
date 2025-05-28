import { List } from 'src/lists/entities/list.entity';
import { Mark } from 'src/marks/entities/mark.entity';
import { BaseEntity } from 'src/utils/base.utils';
import { Entity, Column, ManyToOne, JoinColumn, OneToMany } from 'typeorm';

@Entity()
export class Examination extends BaseEntity {
  @Column({ length: 500, unique: true })
  name: string;

  @ManyToOne(() => List, (list) => list.id)
  @JoinColumn()
  list: List;

  @OneToMany(() => Mark, (mark) => mark.examination)
  @JoinColumn()
  marks: Mark[];
}
