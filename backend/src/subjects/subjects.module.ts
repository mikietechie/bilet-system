import { Module } from '@nestjs/common';
import { SubjectsService } from './subjects.service';
import { SubjectsController } from './subjects.controller';
import { Subject } from './entities/subject.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Note } from 'src/notes/entities/note.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Subject, Note])],
  controllers: [SubjectsController],
  providers: [SubjectsService],
})
export class SubjectsModule {}
