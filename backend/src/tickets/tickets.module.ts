import { Module } from '@nestjs/common';
import { TicketsService } from './tickets.service';
import { TicketsController } from './tickets.controller';
import { Ticket } from './entities/ticket.entity';
import { User } from 'src/users/entities/user.entity';
import { UsersService } from 'src/users/users.service';
import { ListsService } from 'src/lists/lists.service';
import { List } from 'src/lists/entities/list.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Question } from 'src/questions/entities/question.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Ticket, User, List, Question])],
  controllers: [TicketsController],
  providers: [TicketsService, UsersService, ListsService],
})
export class TicketsModule {}
