import { Module } from '@nestjs/common';
import { AnswersService } from './answers.service';
import { AnswersController } from './answers.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Answer } from './entities/answer.entity';
import { User } from 'src/users/entities/user.entity';
import { Question } from 'src/questions/entities/question.entity';
import { UsersService } from 'src/users/users.service';
import { QuestionsService } from 'src/questions/questions.service';
import { ListsService } from 'src/lists/lists.service';
import { List } from 'src/lists/entities/list.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Answer, Question, User, List])],
  controllers: [AnswersController],
  providers: [AnswersService, UsersService, QuestionsService, ListsService],
})
export class AnswersModule {}
