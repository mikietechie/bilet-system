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
} from '@nestjs/common';
import { GroupsService } from './groups.service';
import { CreateGroupDto } from './dto/create-group.dto';
import { UpdateGroupDto } from './dto/update-group.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth/jwt-auth.guard';
import { AddGroupMemberDto } from './dto/add-group-member.dto';
import { UpdateGroupMemberDto } from './dto/update-group-member.dto';

@ApiBearerAuth()
@ApiTags('groups')
@Controller('api/v1/groups')
@UseGuards(JwtAuthGuard)
export class GroupsController {
  constructor(private readonly groupsService: GroupsService) {}

  @Post()
  create(@Body() createGroupDto: CreateGroupDto, @Request() req) {
    return this.groupsService.create(createGroupDto, req.user);
  }

  @Get()
  findAll() {
    return this.groupsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.groupsService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateGroupDto: UpdateGroupDto,
    @Request() req,
  ) {
    return this.groupsService.update(+id, updateGroupDto, req.user);
  }

  @Delete(':id')
  remove(@Param('id') id: string, @Request() req) {
    return this.groupsService.remove(+id, req.user);
  }

  @Get(':gid/members')
  readMembers(@Param('gid') id: string) {
    return this.groupsService.findAllMembers(+id);
  }

  @Post(':gid/members')
  addMember(
    @Body() addGroupMemberDto: AddGroupMemberDto,
    @Param('gid') id: string,
    @Request() req,
  ) {
    return this.groupsService.addMember(+id, addGroupMemberDto, req.user);
  }

  @Patch(':gid/members/:mid')
  updateMember(
    @Body() updateGroupMemberDto: UpdateGroupMemberDto,
    @Param('mid') id: string,
    @Request() req,
  ) {
    return this.groupsService.updateMember(+id, updateGroupMemberDto, req.user);
  }

  @Delete(':gid/members/:mid')
  removeMember(@Param('mid') id: string, @Request() req) {
    return this.groupsService.removeMember(+id, req.user);
  }
}
