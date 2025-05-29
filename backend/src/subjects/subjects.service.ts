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
    private subjectsRepository: Repository<Subject>,
  ) {}

  async create(createSubjectDto: CreateSubjectDto): Promise<number> {
    const obj = new Subject();
    obj.name = createSubjectDto.name;
    obj.level = createSubjectDto.level;
    await this.subjectsRepository.save(obj);
    return obj.id;
  }

  async findAll(): Promise<Subject[]> {
    return await this.subjectsRepository.find();
  }

  async findOne(id: number): Promise<Subject | null> {
    return await this.subjectsRepository.findOneBy({ id });
  }

  async update(
    id: number,
    updateSubjectDto: UpdateSubjectDto,
  ): Promise<Subject> {
    const obj = await this.subjectsRepository.findOneBy({ id });
    if (!obj) {
      throw new NotFoundException();
    }
    obj.name = updateSubjectDto.name;
    await this.subjectsRepository.save(obj);
    return obj;
  }

  async remove(id: number) {
    await this.subjectsRepository.delete(id);
  }
}
