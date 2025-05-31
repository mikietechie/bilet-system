import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateNoteDto } from './dto/create-note.dto';
import { UpdateNoteDto } from './dto/update-note.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Note } from './entities/note.entity';
import { Repository } from 'typeorm';
import { JwtPayloadDto } from 'src/auth/dto/jwt-payload-dto';
import { UsersService } from 'src/users/users.service';
import { SubjectsService } from 'src/subjects/subjects.service';
import { checkOwnerShipPermissions } from 'src/utils/permissions.utils';

@Injectable()
export class NotesService {
  constructor(
    @InjectRepository(Note)
    private notesRepository: Repository<Note>,
    private subjectsService: SubjectsService,
    private usersService: UsersService,
  ) {}

  async create(
    createNoteDto: CreateNoteDto,
    token: JwtPayloadDto,
  ): Promise<number> {
    const note = new Note();
    note.title = createNoteDto.title;
    note.description = createNoteDto.description;
    note.isPublic = createNoteDto.isPublic;
    note.subject = await this.subjectsService.getSubjectFk(
      createNoteDto.subjectId,
    );
    note.owner = await this.usersService.getUserFk(token.userId);
    await this.notesRepository.save(note);
    return note.id;
  }

  async findAll(): Promise<Note[]> {
    return await this.notesRepository.find();
  }

  async findOne(id: number): Promise<Note> {
    return await this.getNoteWithOwner(id);
  }

  async update(
    id: number,
    updateNoteDto: UpdateNoteDto,
    token: JwtPayloadDto,
  ): Promise<Note> {
    const note = await this.getNoteWithOwner(id);
    checkOwnerShipPermissions(note, token);
    note.title = updateNoteDto.title;
    note.description = updateNoteDto.description;
    note.isPublic = updateNoteDto.isPublic;
    await this.notesRepository.save(note);
    return note;
  }

  async remove(id: number, token: JwtPayloadDto) {
    const note = await this.getNoteWithOwner(id);
    checkOwnerShipPermissions(note, token);
    await this.notesRepository.remove(note);
  }

  async getNoteWithOwner(id: number): Promise<Note> {
    try {
      return await this.notesRepository.findOneOrFail({
        where: { id },
        relations: { owner: true },
      });
    } catch (error) {
      console.error(error);
      throw new NotFoundException();
    }
  }
}
