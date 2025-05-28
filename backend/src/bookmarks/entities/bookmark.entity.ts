import { User } from 'src/users/entities/user.entity';
import { BaseEntity } from 'src/utils/base.utils';
import { Entity, Column, ManyToOne, JoinColumn, Index } from 'typeorm';

@Entity()
@Index(['iid', 'entity'])
export class Bookmark extends BaseEntity {
  @Column({})
  iid: number;

  @Column({ length: 128 })
  entity: string;

  @ManyToOne(() => User, (owner) => owner.id)
  @JoinColumn()
  owner: User;
}
