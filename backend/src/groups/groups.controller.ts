import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Request,
  UseGuards,
  ParseIntPipe,
} from '@nestjs/common';
import { GroupsService } from './groups.service';
import { CreateGroupDto } from './dto/create-group.dto';
import { UpdateGroupDto } from './dto/update-group.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth/jwt-auth.guard';
import { AddGroupMemberDto } from './dto/add-group-member.dto';
import { UpdateGroupMemberDto } from './dto/update-group-member.dto';
import { AddGroupUserDto } from './dto/add-group-user.dto';
import { UpdateGroupUserDto } from './dto/update-group-user.dto';
import { GroupUsersService } from './group-users/group-users.service';

@ApiBearerAuth()
@ApiTags('groups')
@Controller('api/v1/groups')
@UseGuards(JwtAuthGuard)
export class GroupsController {
  constructor(
    private readonly groupsService: GroupsService,
    private readonly groupUsersService: GroupUsersService,
  ) {}

  @Post()
  create(@Body() createGroupDto: CreateGroupDto, @Request() req) {
    return this.groupsService.create(createGroupDto, req.user);
  }

  @Get()
  findAll() {
    return this.groupsService.findAll();
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateGroupDto: UpdateGroupDto,
    @Request() req,
  ) {
    return this.groupsService.update(id, updateGroupDto, req.user);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number, @Request() req) {
    return this.groupsService.remove(id, req.user);
  }

  @Get('owned')
  findAllGroupsByOwner(@Request() req) {
    return this.groupsService.findAllGroupsByOwner(req.user?.userId);
  }

  @Get('member')
  findAllGroupsByMembership(@Request() req) {
    return this.groupsService.findAllGroupsByOwner(req.user?.userId);
  }

  @Get('user')
  findUserGroups(@Request() req) {
    return this.groupUsersService.findByUser(req.user?.userId);
  }

  @Get(':groupId/members')
  readMembers(@Param('groupId', ParseIntPipe) id: number) {
    return this.groupsService.findAllMembers(id);
  }

  @Get(':groupId/users')
  findUsersByGroup(@Param('groupId', ParseIntPipe) id: number) {
    return this.groupUsersService.findByGroup(id);
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.groupsService.findOne(id);
  }

  @Post(':groupId/members')
  addMember(
    @Body() addGroupMemberDto: AddGroupMemberDto,
    @Param('groupId', ParseIntPipe) id: number,
    @Request() req,
  ) {
    return this.groupsService.addMember(id, addGroupMemberDto, req.user);
  }

  @Patch(':groupId/members/:mid')
  updateMember(
    @Body() updateGroupMemberDto: UpdateGroupMemberDto,
    @Param('groupId', ParseIntPipe) groupId: number,
    @Param('mid', ParseIntPipe) mid: number,
    @Request() req,
  ) {
    return this.groupsService.updateMember(mid, updateGroupMemberDto, req.user);
  }

  @Delete(':groupId/members/:mid')
  removeMember(
    @Param('mid', ParseIntPipe) mid: number,
    @Param('groupId', ParseIntPipe) groupId: number,
    @Request() req,
  ) {
    return this.groupsService.removeMember(mid, req.user);
  }

  @Post(':groupId/users')
  addUser(
    @Body() addGroupUserDto: AddGroupUserDto,
    @Param('groupId', ParseIntPipe) id: number,
    @Request() req,
  ) {
    return this.groupUsersService.addUser(id, addGroupUserDto, req.user);
  }

  @Patch(':groupId/users/:mid')
  updateUser(
    @Body() updateGroupUserDto: UpdateGroupUserDto,
    @Param('groupId', ParseIntPipe) groupId: number,
    @Param('mid', ParseIntPipe) mid: number,
    @Request() req,
  ) {
    return this.groupUsersService.updateUser(mid, updateGroupUserDto, req.user);
  }

  @Delete(':groupId/users/:mid')
  removeUser(
    @Param('groupId', ParseIntPipe) groupId: number,
    @Param('mid', ParseIntPipe) mid: number,
    @Request() req,
  ) {
    return this.groupUsersService.removeUser(mid, req.user);
  }
}
