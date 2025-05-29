import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { CreateGroupDto } from './dto/create-group.dto';
import { UpdateGroupDto } from './dto/update-group.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Group } from './entities/group.entity';
import { Raw, Repository } from 'typeorm';
import { JwtPayloadDto } from 'src/auth/dto/jwt-payload-dto';
import { UsersService } from 'src/users/users.service';
import { UserRole } from 'src/users/entities/user.entity';
import { AddGroupMemberDto } from './dto/add-group-member.dto';
import { GroupMember } from './entities/group-member.entity';
import { UpdateGroupMemberDto } from './dto/update-group-member.dto';

@Injectable()
export class GroupsService {
  constructor(
    @InjectRepository(Group)
    private groupsRepository: Repository<Group>,
    @InjectRepository(GroupMember)
    private groupMembersRepository: Repository<GroupMember>,
    private usersService: UsersService,
  ) {}

  async create(
    createGroupDto: CreateGroupDto,
    token: JwtPayloadDto,
  ): Promise<number> {
    const group = new Group();
    group.name = createGroupDto.name;
    group.isPublic = createGroupDto.isPublic;
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
    this.canAlterGroup(group, token);
    group.name = updateGroupDto.name;
    group.isPublic = updateGroupDto.isPublic;
    await this.groupsRepository.save(group);
    return group;
  }

  async remove(id: number, token: JwtPayloadDto) {
    const group = await this.findOneWithOwner(id);
    this.canAlterGroup(group, token);
    await this.groupsRepository.delete(group);
  }

  async findAllMembers(id: number): Promise<GroupMember[]> {
    const group = await this.groupsRepository.findOneBy({ id });
    return await this.groupsRepository.query(
      `
SELECT
    group_member."id" as "id",
    group_member."userId" as "userId",
    group_member."groupId" as "groupId",
    group_member."isActive" as "isActive",
    group_member."isAdmin" as "isAdmin",
    users."name" as "userName",
    users."email" as "userEmail"
FROM
    group_member
    JOIN users ON users."id" = group_member."userId"
WHERE
    group_member."groupId" = $1;`,
      [group.id],
    );
  }

  async addMember(
    groupId: number,
    addGroupMemberDto: AddGroupMemberDto,
    token: JwtPayloadDto,
  ): Promise<number> {
    const groupMember = new GroupMember();
    groupMember.user = await this.usersService.getUserFk(
      addGroupMemberDto.userId,
    );
    groupMember.group = await this.findOneWithOwner(groupId);
    groupMember.isAdmin = addGroupMemberDto.isAdmin;
    // groupMember.isActive = addGroupMemberDto.isActive;

    if (!(groupMember.group.owner.id === token.userId)) {
      groupMember.isAdmin = false;
    }

    const creator = await this.usersService.getUserFk(token.userId);
    const isAdmin = Boolean(
      creator ||
        (await this.groupMembersRepository.findOneBy({
          isAdmin: true,
          user: await this.usersService.getUserFk(token.userId),
        })),
    );
    if (!isAdmin && groupMember.group.membersNeedActivation) {
      groupMember.isActive = false;
    }

    // Check permissions
    if (
      (!groupMember.group.isPublic && !isAdmin) ||
      (!isAdmin && groupMember.user.id !== token.userId)
    ) {
      throw new UnauthorizedException();
    }
    // TODO: maybe add more conditions
    const existing = await this.groupMembersRepository.findOneBy({
      // group: groupMember.group,
      // user: groupMember.user,
      id: Raw(
        () =>
          `"groupId" = ${groupMember.group.id} AND "userId" = ${groupMember.user.id}`,
      ),
    });
    if (existing) {
      throw new BadRequestException('User already in group');
    }
    await this.groupMembersRepository.save(groupMember);
    return groupMember.id;
  }

  async removeMember(id: number, token: JwtPayloadDto) {
    const groupMember = await this.groupMembersRepository.findOneOrFail({
      where: {
        id,
      },
      relations: {
        group: true,
        user: true,
      },
    });
    const group = await this.findOneWithOwner(groupMember.group.id);
    const admin = await this.groupMembersRepository.findOneBy({
      isAdmin: true,
      user: await this.usersService.getUserFk(token.userId),
      group: group,
    });
    if (
      groupMember.user.id === token.userId ||
      group.owner.id === token.userId ||
      admin
    ) {
      await this.groupMembersRepository.remove(groupMember);
      return;
    }
    throw new UnauthorizedException();
  }

  async updateMember(
    id: number,
    updateGroupMemberDto: UpdateGroupMemberDto,
    token: JwtPayloadDto,
  ) {
    const groupMember = await this.groupMembersRepository.findOneOrFail({
      where: {
        id,
      },
      relations: {
        group: true,
        user: true,
      },
    });
    const group = await this.findOneWithOwner(groupMember.group.id);
    const admin = await this.groupMembersRepository.findOneBy({
      isAdmin: true,
      user: await this.usersService.getUserFk(token.userId),
      group: group,
    });
    if (group.owner.id === token.userId || admin) {
      groupMember.isActive = updateGroupMemberDto.isActive;
      groupMember.isAdmin = updateGroupMemberDto.isAdmin;
      await this.groupMembersRepository.save(groupMember);
      return;
    }
    throw new UnauthorizedException();
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

  canAlterGroup(group: Group, token: JwtPayloadDto) {
    if (!(token.role === UserRole.ADMIN || group.owner.id === token.userId)) {
      throw new UnauthorizedException();
    }
  }
}
