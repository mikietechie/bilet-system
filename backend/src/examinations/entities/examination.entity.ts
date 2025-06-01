import { List } from 'src/lists/entities/list.entity';
import { Mark } from 'src/marks/entities/mark.entity';
import { User } from 'src/users/entities/user.entity';
import { BaseEntity } from 'src/utils/base.utils';
import { Entity, Column, ManyToOne, JoinColumn, OneToMany } from 'typeorm';

@Entity()
export class Examination extends BaseEntity {
  @Column({ length: 512 })
  title: string;

  @Column({ type: 'date' })
  date: Date;

  @ManyToOne(() => List, (list) => list.id)
  @JoinColumn()
  list: List;

  @ManyToOne(() => User, (owner) => owner.id)
  @JoinColumn()
  owner: User;

  @OneToMany(() => Mark, (mark) => mark.examination)
  @JoinColumn()
  marks: Mark[];
}
