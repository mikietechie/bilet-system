import { User } from 'src/users/entities/user.entity';
import { BaseEntity } from 'src/common/base/entiry';
import { Entity, Column, ManyToOne, JoinColumn, Index } from 'typeorm';

@Entity()
@Index(['eid', 'entity'])
export class Bookmark extends BaseEntity {
  @Column({})
  eid: number;

  @Column({ length: 128, nullable: true })
  key: string;

  @Column({ length: 128, nullable: true })
  name: string;

  @Column({ length: 128 })
  entity: string;

  @ManyToOne(() => User, (owner) => owner.id)
  @JoinColumn()
  owner: User;
}
