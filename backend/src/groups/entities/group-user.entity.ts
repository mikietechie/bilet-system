import { User } from 'src/users/entities/user.entity';
import { BaseEntity } from 'src/common/base/entiry';
import { Entity, Column, ManyToOne, JoinColumn, Unique } from 'typeorm';
import { Group } from './group.entity';

@Entity()
@Unique(['user', 'group'])
export class GroupUser extends BaseEntity {
  @Column({ default: true })
  isActive: boolean;

  @ManyToOne(() => User, (user) => user.id)
  @JoinColumn()
  user: User;

  @ManyToOne(() => Group, (group) => group.id)
  @JoinColumn()
  group: Group;
}
