import { Module } from '@nestjs/common';
import { ExaminationsService } from './examinations.service';
import { ExaminationsController } from './examinations.controller';
import { UsersService } from 'src/users/users.service';
import { ListsService } from 'src/lists/lists.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Examination } from './entities/examination.entity';
import { User } from 'src/users/entities/user.entity';
import { List } from 'src/lists/entities/list.entity';
import { Question } from 'src/questions/entities/question.entity';
import { Mark } from 'src/marks/entities/mark.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Examination, Mark, User, List, Question]),
  ],
  controllers: [ExaminationsController],
  providers: [ExaminationsService, UsersService, ListsService],
})
export class ExaminationsModule {}
