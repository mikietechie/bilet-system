import { User } from 'src/users/entities/user.entity';
import { BaseEntity } from 'src/utils/base.utils';
import { Entity, Column, ManyToOne, JoinColumn, Unique } from 'typeorm';
import { Klass } from './klass.entity';

@Entity()
@Unique(['user', 'klass'])
export class KlassMember extends BaseEntity {
  @Column({ default: true })
  isActive: boolean;

  @Column({ default: false })
  isAdmin: boolean;

  @ManyToOne(() => User, (user) => user.id)
  @JoinColumn()
  user: User;

  @ManyToOne(() => Klass, (klass) => klass.id)
  @JoinColumn()
  klass: Klass;
}
