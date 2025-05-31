import { Module } from '@nestjs/common';
import { QuestionsService } from './questions.service';
import { QuestionsController } from './questions.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Question } from './entities/question.entity';
import { UsersService } from 'src/users/users.service';
import { User } from 'src/users/entities/user.entity';
import { List } from 'src/lists/entities/list.entity';
import { ListsService } from 'src/lists/lists.service';

@Module({
  imports: [TypeOrmModule.forFeature([Question, User, List])],
  controllers: [QuestionsController],
  providers: [QuestionsService, UsersService, ListsService],
})
export class QuestionsModule {}
