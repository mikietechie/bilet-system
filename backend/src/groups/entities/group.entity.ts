import { User } from 'src/users/entities/user.entity';
import { BaseEntity } from 'src/utils/base.utils';
import {
  Entity,
  Column,
  ManyToOne,
  JoinColumn,
  ManyToMany,
  JoinTable,
} from 'typeorm';

@Entity()
export class Group extends BaseEntity {
  @Column({ length: 500, unique: true })
  name: string;

  @ManyToOne(() => User, (owner) => owner.id)
  @JoinColumn()
  owner: User;

  @ManyToMany(() => User, (u) => u.groups)
  @JoinTable()
  members: User[];
}
