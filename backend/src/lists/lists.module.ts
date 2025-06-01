import { Module } from '@nestjs/common';
import { ListsService } from './lists.service';
import { ListsController } from './lists.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { List } from './entities/list.entity';
import { User } from 'src/users/entities/user.entity';
import { UsersService } from 'src/users/users.service';
import { Question } from 'src/questions/entities/question.entity';

@Module({
  imports: [TypeOrmModule.forFeature([List, User, Question])],
  controllers: [ListsController],
  providers: [ListsService, UsersService],
})
export class ListsModule {}
