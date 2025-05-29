import { User } from 'src/users/entities/user.entity';
import { BaseEntity } from 'src/utils/base.utils';
import { Entity, Column, ManyToOne, JoinColumn, Unique } from 'typeorm';
import { Group } from './group.entity';

@Entity()
@Unique(['user', 'group'])
export class GroupMember extends BaseEntity {
  @Column({ default: true })
  isActive: boolean;

  @Column({ default: false })
  isAdmin: boolean;

  @ManyToOne(() => User, (user) => user.id)
  @JoinColumn()
  user: User;

  @ManyToOne(() => Group, (group) => group.id)
  @JoinColumn()
  group: Group;
}
