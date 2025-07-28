import { Injectable, UnauthorizedException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Group } from '../entities/group.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { GroupUser } from '../entities/group-user.entity';
import { UsersService } from 'src/users/users.service';
import { GroupUsersResponseItemDto } from '../dto/group-user-item.dto';
import { AddGroupUserDto } from '../dto/add-group-user.dto';
import { JwtPayloadDto } from 'src/auth/dto/jwt-payload-dto';
import { GroupsService } from '../groups.service';
import { UpdateGroupUserDto } from '../dto/update-group-user.dto';
import { User } from 'src/users/entities/user.entity';

@Injectable()
export class GroupUsersService {
  constructor(
    @InjectRepository(Group)
    private groupsRepository: Repository<Group>,
    @InjectRepository(GroupUser)
    private groupUsersRepository: Repository<GroupUser>,
    private usersService: UsersService,
    private groupsService: GroupsService,
  ) {}

  async findByGroup(groupId: number): Promise<GroupUsersResponseItemDto[]> {
    const group = await this.groupsRepository.findOneBy({ id: groupId });
    return await this.groupsRepository.query(
      `
        SELECT
            group_user."id" as "id",
            group_user."userId" as "userId",
            group_user."groupId" as "groupId",
            group_user."isActive" as "isActive",
            users."name" as "userName",
            users."email" as "userEmail"
        FROM
            group_user
            JOIN users ON users."id" = group_user."userId"
        WHERE
            group_user."groupId" = $1;`,
      [group.id],
    );
  }

  async findByUser(userId: number): Promise<GroupUser[]> {
    return await this.groupUsersRepository.find({
      where: {
        user: { id: userId } as never as User,
      },
      relations: {
        group: true,
      },
    });
  }

  async addUser(
    groupId: number,
    addGroupUserDto: AddGroupUserDto,
    token: JwtPayloadDto,
  ): Promise<number> {
    const groupUser = new GroupUser();
    groupUser.user = await this.usersService.getUserByEmail(
      addGroupUserDto.email,
    );
    groupUser.group = await this.groupsService.findOneWithOwner(groupId);
    groupUser.isActive = true;
    // Check permissions
    if (groupUser.group.owner.id !== token.userId) {
      throw new UnauthorizedException();
    }
    await this.groupUsersRepository.save(groupUser);
    return groupUser.id;
  }

  async updateUser(
    id: number,
    updateGroupUserDto: UpdateGroupUserDto,
    token: JwtPayloadDto,
  ) {
    const groupUser = await this.findOneWithUserAndGroup(id);
    const group = await this.groupsService.findOneWithOwner(groupUser.group.id);
    if (group.owner.id === token.userId) {
      groupUser.isActive = updateGroupUserDto.isActive;
      await this.groupUsersRepository.save(groupUser);
      return;
    }
    throw new UnauthorizedException();
  }
  async removeUser(id: number, token: JwtPayloadDto) {
    const groupUser = await this.findOneWithUserAndGroup(id);
    const group = await this.groupsService.findOneWithOwner(groupUser.group.id);
    if (groupUser.user.id === token.userId || group.owner.id === token.userId) {
      await this.groupUsersRepository.remove(groupUser);
      return;
    }
    throw new UnauthorizedException();
  }

  private async findOneWithUserAndGroup(id: number): Promise<GroupUser> {
    return await this.groupUsersRepository.findOneOrFail({
      where: {
        id,
      },
      relations: {
        group: true,
        user: true,
      },
    });
  }
}
