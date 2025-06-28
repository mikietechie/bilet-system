import { List } from 'src/lists/entities/list.entity';
import { Answer } from 'src/answers/entities/answer.entity';
import { Entity, Column, ManyToOne, JoinColumn, OneToMany } from 'typeorm';
import { BaseEntity } from 'src/common/base/entiry';

@Entity()
export class Question extends BaseEntity {
  @Column({ length: 512 })
  title: string;

  @Column({ length: 2048, nullable: true })
  description: string;

  @ManyToOne(() => List, (list) => list.id)
  @JoinColumn()
  list: List;

  @OneToMany(() => Answer, (answer) => answer.question)
  @JoinColumn()
  answers: Answer[];
}
