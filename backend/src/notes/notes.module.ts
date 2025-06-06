import { Module } from '@nestjs/common';
import { NotesService } from './notes.service';
import { NotesController } from './notes.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Note } from './entities/note.entity';
import { User } from 'src/users/entities/user.entity';
import { Subject } from 'src/subjects/entities/subject.entity';
import { UsersService } from 'src/users/users.service';
import { SubjectsService } from 'src/subjects/subjects.service';

@Module({
  imports: [TypeOrmModule.forFeature([Note, Subject, User])],
  controllers: [NotesController],
  providers: [NotesService, UsersService, SubjectsService],
})
export class NotesModule {}
