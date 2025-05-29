import { User } from 'src/users/entities/user.entity';
import { BaseEntity } from 'src/utils/base.utils';
import { Entity, Column, ManyToOne, JoinColumn, OneToMany } from 'typeorm';
import { GroupMember } from './group-member.entity';

@Entity()
export class Group extends BaseEntity {
  @Column({ length: 500, unique: true })
  name: string;

  @Column({ default: true })
  isPublic: boolean;

  @Column({ default: false })
  membersNeedActivation: boolean;

  @ManyToOne(() => User, (owner) => owner.id)
  @JoinColumn()
  owner: User;

  @OneToMany(() => GroupMember, (groupMember) => groupMember.group)
  memberships: GroupMember[];
}
