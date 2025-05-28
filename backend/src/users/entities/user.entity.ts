import { Group } from 'src/groups/entities/group.entity';
import { Klass } from 'src/klasses/entities/klass.entity';
import { Entity, Column, JoinColumn, ManyToMany } from 'typeorm';
import { IsEmail } from 'class-validator';
import { BaseEntity } from 'src/utils/base.utils';

export enum UserRole {
  ADMIN = 'admin',
  ORDINARY = 'ORDINARY',
}

@Entity()
export class User extends BaseEntity {
  @Column({ length: 500 })
  name: string;

  @Column({ length: 500 })
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

  @ManyToMany(() => Group, (group) => group.members)
  @JoinColumn()
  groups: Group[];
}
