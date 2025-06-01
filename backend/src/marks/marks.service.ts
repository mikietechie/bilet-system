import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateMarkDto } from './dto/create-mark.dto';
import { UpdateMarkDto } from './dto/update-mark.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Mark } from './entities/mark.entity';
import { Repository } from 'typeorm';
import { JwtPayloadDto } from 'src/auth/dto/jwt-payload-dto';
import { ExaminationsService } from 'src/examinations/examinations.service';
import { checkOwnerShipPermissions } from 'src/utils/permissions.utils';

@Injectable()
export class MarksService {
  constructor(
    @InjectRepository(Mark) private marksRepository: Repository<Mark>,
    private examinationsService: ExaminationsService,
  ) {}

  async create(
    createMarkDto: CreateMarkDto,
    token: JwtPayloadDto,
  ): Promise<number> {
    const examination = await this.examinationsService.getExaminationWithOwner(
      createMarkDto.examinationId,
    );
    checkOwnerShipPermissions(examination, token);
    const mark = new Mark();
    mark.name = createMarkDto.name;
    mark.grade = createMarkDto.grade;
    mark.examination = examination;
    mark.ticket = createMarkDto.ticket as any;
    return mark.id;
  }

  findAll() {
    return `This action returns all marks`;
  }

  async findAllUserMarks(token: JwtPayloadDto): Promise<Mark[]> {
    return await this.marksRepository.find({
      where: { user: { id: token.userId } as any },
    });
  }

  async findOne(id: number, token: JwtPayloadDto): Promise<Mark> {
    const mark = await this.findMarkWithExamination(id);
    delete mark.examination.owner;
    return mark;
  }

  async update(
    id: number,
    updateMarkDto: UpdateMarkDto,
    token: JwtPayloadDto,
  ): Promise<Mark> {
    const mark = await this.findMarkWithExamination(id);
    mark.name = updateMarkDto.name;
    mark.grade = updateMarkDto.grade;
    mark.ticket = updateMarkDto.ticket as any;
    this.marksRepository.save(mark);
    delete mark.examination.owner;
    return mark;
  }

  async remove(id: number, token: JwtPayloadDto) {
    const mark = await this.findMarkWithExamination(id);
    this.marksRepository.remove(mark);
  }

  async findMarkWithExamination(id: number): Promise<Mark> {
    try {
      const mark = await this.marksRepository.findOneOrFail({
        where: { id },
        relations: { examination: true },
      });
      mark.examination = await this.examinationsService.getExaminationWithOwner(
        mark.examination.id,
      );
      return mark;
    } catch (error) {
      console.error(error);
      throw new NotFoundException();
    }
  }
}
