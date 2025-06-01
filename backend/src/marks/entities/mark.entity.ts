import { Examination } from 'src/examinations/entities/examination.entity';
import { Ticket } from 'src/tickets/entities/ticket.entity';
import { User } from 'src/users/entities/user.entity';
import { BaseEntity } from 'src/utils/base.utils';
import { Entity, Column, ManyToOne, JoinColumn } from 'typeorm';

@Entity()
export class Mark extends BaseEntity {
  @Column({ length: 512, unique: true })
  name: string;

  @Column({ length: 512, unique: true })
  grade: string;

  @ManyToOne(() => User, (user) => user.id)
  @JoinColumn()
  user: User;

  @ManyToOne(() => Examination, (list) => list.id)
  @JoinColumn()
  examination: Examination;

  @ManyToOne(() => Ticket, (ticket) => ticket.id)
  @JoinColumn()
  ticket: Ticket;
}
