import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { CreateListDto } from './dto/create-list.dto';
import { UpdateListDto } from './dto/update-list.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { List } from './entities/list.entity';
import { Repository } from 'typeorm';
import { UsersService } from 'src/users/users.service';
import { JwtPayloadDto } from 'src/auth/dto/jwt-payload-dto';
import { UserRole } from 'src/users/entities/user.entity';
import { Question } from 'src/questions/entities/question.entity';

@Injectable()
export class ListsService {
  constructor(
    @InjectRepository(List)
    private listsRepository: Repository<List>,
    @InjectRepository(Question)
    private questionsRepository: Repository<Question>,
    private usersService: UsersService,
  ) {}

  async create(
    createListDto: CreateListDto,
    token: JwtPayloadDto,
  ): Promise<number> {
    const list = new List();
    list.name = createListDto.name;
    list.owner = await this.usersService.getUserFk(token.userId);
    await this.listsRepository.save(list);
    return list.id;
  }

  async findAll(): Promise<List[]> {
    return await this.listsRepository.find();
  }

  async findOne(id: number): Promise<List> {
    const list = await this.listsRepository.findOneBy({ id });
    if (!list) {
      throw new NotFoundException();
    }
    return list;
  }

  async update(
    id: number,
    updateListDto: UpdateListDto,
    token: JwtPayloadDto,
  ): Promise<List> {
    const list = await this.getListWithOwner(id);
    list.name = updateListDto.name;
    this.checkAlterPermissions(list, token);
    await this.listsRepository.save(list);
    return list;
  }

  async remove(id: number, token: JwtPayloadDto) {
    const list = await this.getListWithOwner(id);
    this.checkAlterPermissions(list, token);
    await this.listsRepository.remove(list);
  }

  async findAllQuestions(listId: number): Promise<Question[]> {
    const list = await this.getListWithOwner(listId);
    return await this.questionsRepository.findBy({ list });
  }

  async checkAlterPermissions(list: List, token: JwtPayloadDto) {
    if (!(token.role === UserRole.ADMIN) || token.userId !== list.owner.id) {
      throw new UnauthorizedException();
    }
  }

  async getListWithOwner(id: number): Promise<List> {
    try {
      return await this.listsRepository.findOneOrFail({
        where: { id },
        relations: { owner: true },
      });
    } catch (error) {
      console.error(error);
      throw new NotFoundException();
    }
  }
}
