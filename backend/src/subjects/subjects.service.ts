import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateSubjectDto } from './dto/create-subject.dto';
import { UpdateSubjectDto } from './dto/update-subject.dto';
import { Subject } from './entities/subject.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class SubjectsService {
  constructor(
    @InjectRepository(Subject)
    private SubjectsRepository: Repository<Subject>,
  ) {}

  async create(createSubjectDto: CreateSubjectDto): Promise<number> {
    const u = new Subject();
    u.name = createSubjectDto.name;
    await this.SubjectsRepository.save(u);
    return u.id;
  }

  async findAll(): Promise<Subject[]> {
    return await this.SubjectsRepository.find();
  }

  async findOne(id: number): Promise<Subject | null> {
    return await this.SubjectsRepository.findOneBy({ id });
  }

  async update(
    id: number,
    updateSubjectDto: UpdateSubjectDto,
  ): Promise<Subject> {
    const u = await this.SubjectsRepository.findOneBy({ id });
    if (!u) {
      throw new NotFoundException();
    }
    u.name = updateSubjectDto.name;
    await this.SubjectsRepository.save(u);
    return u;
  }

  async remove(id: number) {
    await this.SubjectsRepository.delete(id);
  }
}
