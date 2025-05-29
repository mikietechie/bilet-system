import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateGroupDto } from './dto/create-group.dto';
import { UpdateGroupDto } from './dto/update-group.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Group } from './entities/group.entity';
import { Repository } from 'typeorm';
import { JwtPayloadDto } from 'src/auth/dto/jwt-payload-dto';
import { UsersService } from 'src/users/users.service';
import { UserRole } from 'src/users/entities/user.entity';

@Injectable()
export class GroupsService {
  constructor(
    @InjectRepository(Group)
    private groupsRepository: Repository<Group>,
    private usersService: UsersService,
  ) {}

  async create(
    createGroupDto: CreateGroupDto,
    token: JwtPayloadDto,
  ): Promise<number> {
    const group = new Group();
    group.name = createGroupDto.name;
    group.owner = await this.usersService.getUserFk(token.userId);
    await this.groupsRepository.save(group);
    return group.id;
  }

  async findAll(): Promise<Group[]> {
    return this.groupsRepository.find();
  }

  async findOne(id: number): Promise<Group> {
    return await this.groupsRepository.findOneByOrFail({ id });
  }

  async update(
    id: number,
    updateGroupDto: UpdateGroupDto,
    token: JwtPayloadDto,
  ): Promise<Group> {
    const group = await this.findOneWithOwner(id);
    this.canAlter(group, token);
    group.name = updateGroupDto.name;
    await this.groupsRepository.save(group);
    return group;
  }

  async remove(id: number, token: JwtPayloadDto) {
    const group = await this.findOneWithOwner(id);
    this.canAlter(group, token);
    await this.groupsRepository.delete(group);
  }

  async findOneWithOwner(id: number): Promise<Group> {
    return await this.groupsRepository.findOneOrFail({
      where: {
        id,
      },
      relations: {
        owner: true,
      },
    });
  }

  canAlter(group: Group, token: JwtPayloadDto) {
    if (!(token.role === UserRole.ADMIN || group.owner.id === token.userId)) {
      throw new UnauthorizedException();
    }
  }
}
