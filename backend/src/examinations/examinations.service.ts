import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateExaminationDto } from './dto/create-examination.dto';
import { UpdateExaminationDto } from './dto/update-examination.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Examination } from './entities/examination.entity';
import { Repository } from 'typeorm';
import { JwtPayloadDto } from 'src/auth/dto/jwt-payload-dto';
import { checkOwnerShipPermissions } from 'src/utils/permissions.utils';
import { Mark } from 'src/marks/entities/mark.entity';
import { idAsIBaseAny } from 'src/utils/base.utils';

@Injectable()
export class ExaminationsService {
  constructor(
    @InjectRepository(Examination)
    private examinationsRepository: Repository<Examination>,
    @InjectRepository(Mark)
    private marksRepository: Repository<Mark>,
  ) {}

  async create(
    createExaminationDto: CreateExaminationDto,
    token: JwtPayloadDto,
  ): Promise<number> {
    const examination = new Examination();
    examination.title = createExaminationDto.title;
    examination.date = createExaminationDto.date;
    examination.list = createExaminationDto.list as any;
    examination.owner = { id: token.userId } as any;
    await this.examinationsRepository.save(examination);
    return examination.id;
  }

  async findAll(): Promise<Examination[]> {
    return await this.examinationsRepository.find();
  }

  async findAllExaminationsByOwner(userId: number): Promise<Examination[]> {
    return await this.examinationsRepository.findBy({
      owner: idAsIBaseAny(userId),
    });
  }

  async findOne(id: number): Promise<Examination> {
    return await this.getExaminationWithOwner(id);
  }

  async update(
    id: number,
    updateExaminationDto: UpdateExaminationDto,
    token: JwtPayloadDto,
  ): Promise<Examination> {
    const examination = await this.getExaminationWithOwner(id);
    checkOwnerShipPermissions(examination, token);
    examination.title = updateExaminationDto.title;
    examination.date = updateExaminationDto.date;
    await this.examinationsRepository.save(examination);
    return examination;
  }

  async remove(id: number, token: JwtPayloadDto) {
    const examination = await this.getExaminationWithOwner(id);
    checkOwnerShipPermissions(examination, token);
    await this.examinationsRepository.remove(examination);
  }

  async findAllMarks(id: number): Promise<Mark[]> {
    const examination = await this.getExaminationWithOwner(id);
    return await this.marksRepository.find({ where: { examination } });
  }

  async getExaminationWithOwner(id: number): Promise<Examination> {
    try {
      return await this.examinationsRepository.findOneOrFail({
        where: { id },
        relations: { owner: true },
      });
    } catch (error) {
      console.error(error);
      throw new NotFoundException();
    }
  }
}
