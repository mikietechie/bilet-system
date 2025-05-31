import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateAnswerDto } from './dto/create-answer.dto';
import { UpdateAnswerDto } from './dto/update-answer.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Answer } from './entities/answer.entity';
import { Repository } from 'typeorm';
import { JwtPayloadDto } from 'src/auth/dto/jwt-payload-dto';
import { UsersService } from 'src/users/users.service';
import { QuestionsService } from 'src/questions/questions.service';
import { checkOwnerShipPermissions } from 'src/utils/permissions.utils';

@Injectable()
export class AnswersService {
  constructor(
    @InjectRepository(Answer)
    private answersRepository: Repository<Answer>,
    private questionsService: QuestionsService,
    private usersService: UsersService,
  ) {}

  async create(
    createAnswerDto: CreateAnswerDto,
    token: JwtPayloadDto,
  ): Promise<number> {
    const answer = new Answer();
    answer.title = createAnswerDto.title;
    answer.text = createAnswerDto.text;
    answer.question = await this.questionsService.getQuestionWithList(
      createAnswerDto.questionId,
    );
    answer.owner = await this.usersService.getUserFk(token.userId);
    await this.answersRepository.save(answer);
    return answer.id;
  }

  async findAll(): Promise<Answer[]> {
    return await this.answersRepository.find();
  }

  async findOne(id: number): Promise<Answer> {
    return await this.getAnswerWithOwner(id);
  }

  async update(
    id: number,
    updateAnswerDto: UpdateAnswerDto,
    token: JwtPayloadDto,
  ): Promise<Answer> {
    const answer = await this.getAnswerWithOwner(id);
    checkOwnerShipPermissions(answer, token);
    answer.title = updateAnswerDto.title;
    answer.text = updateAnswerDto.text;
    await this.answersRepository.save(answer);
    return answer;
  }

  async remove(id: number, token: JwtPayloadDto) {
    const answer = await this.getAnswerWithOwner(id);
    checkOwnerShipPermissions(answer, token);
    await this.answersRepository.remove(answer);
  }

  async getAnswerWithOwner(id: number): Promise<Answer> {
    try {
      return await this.answersRepository.findOneOrFail({
        where: { id },
        relations: { owner: true },
      });
    } catch (error) {
      console.error(error);
      throw new NotFoundException();
    }
  }
}
