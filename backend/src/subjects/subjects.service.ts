import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateSubjectDto } from './dto/create-subject.dto';
import { UpdateSubjectDto } from './dto/update-subject.dto';
import { Subject } from './entities/subject.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Note } from 'src/notes/entities/note.entity';
import { idAsIBaseAny } from 'src/utils/base.utils';

@Injectable()
export class SubjectsService {
  constructor(
    @InjectRepository(Subject)
    private subjectsRepository: Repository<Subject>,
    @InjectRepository(Note)
    private notesRepository: Repository<Note>,
  ) {}

  async create(createSubjectDto: CreateSubjectDto): Promise<number> {
    const subject = new Subject();
    subject.name = createSubjectDto.name;
    subject.level = createSubjectDto.level;
    await this.subjectsRepository.save(subject);
    return subject.id;
  }

  async findAll(): Promise<Subject[]> {
    return await this.subjectsRepository.find();
  }

  async findNotes(id: number): Promise<Note[]> {
    return await this.notesRepository.find({
      where: { subject: idAsIBaseAny(id), isPublic: true },
    });
  }

  async findOne(id: number): Promise<Subject | null> {
    return await this.getSubjectFk(id);
  }

  async update(
    id: number,
    updateSubjectDto: UpdateSubjectDto,
  ): Promise<Subject> {
    const subject = await this.getSubjectFk(id);
    subject.name = updateSubjectDto.name;
    await this.subjectsRepository.save(subject);
    return subject;
  }

  async remove(id: number) {
    const subject = await this.getSubjectFk(id);
    await this.subjectsRepository.remove(subject);
  }

  async getSubjectFk(id: number): Promise<Subject> {
    try {
      return await this.subjectsRepository.findOneByOrFail({ id });
    } catch (error) {
      console.error(error);
      throw new NotFoundException();
    }
  }
}
