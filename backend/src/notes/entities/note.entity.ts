import { Subject } from 'src/subjects/entities/subject.entity';
import { User } from 'src/users/entities/user.entity';
import { BaseEntity } from 'src/utils/base.utils';
import { Entity, Column, ManyToOne, JoinColumn } from 'typeorm';

@Entity()
export class Note extends BaseEntity {
  @Column({ length: 512 })
  title: string;

  @Column({ length: 8192, nullable: true })
  description: string;

  @Column({ default: true })
  isPublic: boolean;

  @ManyToOne(() => Subject, (subject) => subject.id)
  @JoinColumn()
  subject: Subject;

  @ManyToOne(() => User, (owner) => owner.id)
  @JoinColumn()
  owner: User;
}
