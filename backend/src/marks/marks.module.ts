import { Module } from '@nestjs/common';
import { MarksService } from './marks.service';
import { MarksController } from './marks.controller';
import { Examination } from 'src/examinations/entities/examination.entity';
import { User } from 'src/users/entities/user.entity';
import { Ticket } from 'src/tickets/entities/ticket.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Mark } from './entities/mark.entity';
import { ExaminationsService } from 'src/examinations/examinations.service';
import { UsersService } from 'src/users/users.service';
import { TicketsService } from 'src/tickets/tickets.service';
import { ListsService } from 'src/lists/lists.service';
import { List } from 'src/lists/entities/list.entity';
import { Question } from 'src/questions/entities/question.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Mark, Examination, User, Ticket, List, Question]),
  ],
  controllers: [MarksController],
  providers: [
    MarksService,
    ExaminationsService,
    UsersService,
    TicketsService,
    ListsService,
  ],
})
export class MarksModule {}
