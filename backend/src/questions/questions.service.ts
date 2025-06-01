import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateQuestionDto } from './dto/create-question.dto';
import { UpdateQuestionDto } from './dto/update-question.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Question } from './entities/question.entity';
import { ListsService } from 'src/lists/lists.service';
import { JwtPayloadDto } from 'src/auth/dto/jwt-payload-dto';

@Injectable()
export class QuestionsService {
  constructor(
    @InjectRepository(Question)
    private questionsRepository: Repository<Question>,
    private listsService: ListsService,
  ) {}
  async create(
    createQuestionDto: CreateQuestionDto,
    token: JwtPayloadDto,
  ): Promise<number> {
    const list = await this.listsService.getListWithOwner(
      createQuestionDto.listid,
    );
    this.listsService.checkAlterPermissions(list, token);
    const question = new Question();
    question.title = createQuestionDto.title;
    question.description = createQuestionDto.description;
    question.list = list;
    await this.questionsRepository.save(question);
    return question.id;
  }

  findAll() {
    return `This action returns all questions`;
  }

  async findOne(id: number): Promise<Question> {
    return await this.getQuestionWithList(id);
  }

  async update(
    id: number,
    updateQuestionDto: UpdateQuestionDto,
    token: JwtPayloadDto,
  ): Promise<Question> {
    const question = await this.getQuestionWithList(id);
    const list = await this.listsService.getListWithOwner(question.list.id);
    this.listsService.checkAlterPermissions(list, token);
    question.title = updateQuestionDto.title;
    question.description = updateQuestionDto.description;
    await this.questionsRepository.save(question);
    return question;
  }

  async remove(id: number, token: JwtPayloadDto) {
    const question = await this.getQuestionWithList(id);
    const list = await this.listsService.getListWithOwner(question.list.id);
    this.listsService.checkAlterPermissions(list, token);
    await this.questionsRepository.remove(question);
  }

  async getQuestionWithList(id: number): Promise<Question> {
    try {
      return await this.questionsRepository.findOneOrFail({
        where: { id },
        relations: { list: true },
      });
    } catch (error) {
      console.error(error);
      throw new NotFoundException();
    }
  }
}
