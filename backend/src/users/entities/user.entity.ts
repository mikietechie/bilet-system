import { Klass } from 'src/klasses/entities/klass.entity';
import {
  Entity,
  Column,
  JoinColumn,
  ManyToMany,
  Index,
  OneToMany,
} from 'typeorm';
import { IsEmail } from 'class-validator';
import { BaseEntity } from 'src/utils/base.utils';
import { GroupMember } from 'src/groups/entities/group-member.entity';

export enum UserRole {
  ADMIN = 'admin',
  ORDINARY = 'ORDINARY',
}

@Entity({ name: 'users' })
export class User extends BaseEntity {
  @Column({ length: 500 })
  name: string;

  @Column({ length: 500, unique: true })
  @Index()
  @IsEmail()
  email: string;

  @Column()
  password: string;

  @Column({
    type: 'enum',
    enum: UserRole,
    default: UserRole.ORDINARY,
  })
  role: UserRole;

  @Column({ default: true })
  isActive: boolean;

  @ManyToMany(() => Klass, (klass) => klass.members)
  @JoinColumn()
  klasses: Klass[];

  @OneToMany(() => GroupMember, (groupMember) => groupMember.user)
  memberships: GroupMember[];
}
