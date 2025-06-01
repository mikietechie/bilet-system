import { Entity, Column, Index, OneToMany, JoinColumn } from 'typeorm';
import { IsEmail } from 'class-validator';
import { BaseEntity } from 'src/utils/base.utils';
import { GroupMember } from 'src/groups/entities/group-member.entity';
import { KlassMember } from 'src/klasses/entities/klass-member.entity';
import { Mark } from 'src/marks/entities/mark.entity';

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

  @OneToMany(() => Mark, (mark) => mark.user)
  @JoinColumn()
  marks: Mark[];

  @OneToMany(() => KlassMember, (klassMember) => klassMember.user)
  klassMemberships: KlassMember[];

  @OneToMany(() => GroupMember, (groupMember) => groupMember.user)
  groupMemberships: GroupMember[];
}
