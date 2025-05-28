import { Examination } from 'src/examinations/entities/examination.entity';
import { Ticket } from 'src/tickets/entities/ticket.entity';
import { BaseEntity } from 'src/utils/base.utils';
import { Entity, Column, ManyToOne, JoinColumn } from 'typeorm';

@Entity()
export class Mark extends BaseEntity {
  @Column({ length: 500, unique: true })
  name: string;

  @Column({ length: 500, unique: true })
  grade: string;

  @ManyToOne(() => Examination, (list) => list.id)
  @JoinColumn()
  examination: Examination;

  @ManyToOne(() => Ticket, (ticket) => ticket.id)
  @JoinColumn()
  ticket: Ticket;
}
