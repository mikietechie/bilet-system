import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { SubjectsModule } from './subjects/subjects.module';
import { ListsModule } from './lists/lists.module';
import { QuestionsModule } from './questions/questions.module';
import { NotesModule } from './notes/notes.module';
import { AnswersModule } from './answers/answers.module';
import { GroupsModule } from './groups/groups.module';
import { KlassesModule } from './klasses/klasses.module';
import { ExaminationsModule } from './examinations/examinations.module';
import { TicketsModule } from './tickets/tickets.module';
import { MarksModule } from './marks/marks.module';
import { BookmarksModule } from './bookmarks/bookmarks.module';
import { Answer } from './answers/entities/answer.entity';
import { Bookmark } from './bookmarks/entities/bookmark.entity';
import { Examination } from './examinations/entities/examination.entity';
import { Group } from './groups/entities/group.entity';
import { Klass } from './klasses/entities/klass.entity';
import { List } from './lists/entities/list.entity';
import { Mark } from './marks/entities/mark.entity';
import { Note } from './notes/entities/note.entity';
import { Question } from './questions/entities/question.entity';
import { Subject } from './subjects/entities/subject.entity';
import { Ticket } from './tickets/entities/ticket.entity';
import { User } from './users/entities/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      // type: "postgres",
      // host: "localhost",
      // port: 5432,
      // username: "test",
      // password: "test",
      // database: "test",
      // synchronize: true,
      // logging: true,
      // subscribers: [],
      // migrations: [],
      type: 'sqlite',
      database: 'db.sqlite3',
      entities: [
        Answer,
        Bookmark,
        Examination,
        Group,
        Klass,
        List,
        Mark,
        Note,
        Question,
        Subject,
        Ticket,
        User,
      ],
      synchronize: false,
    }),
    UsersModule,
    AuthModule,
    SubjectsModule,
    ListsModule,
    QuestionsModule,
    NotesModule,
    AnswersModule,
    GroupsModule,
    KlassesModule,
    ExaminationsModule,
    TicketsModule,
    MarksModule,
    BookmarksModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
