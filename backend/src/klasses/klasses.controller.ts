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
import { KlassesService } from './klasses.service';
import { CreateKlassDto } from './dto/create-klass.dto';
import { UpdateKlassDto } from './dto/update-klass.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth/jwt-auth.guard';
import { AddKlassMemberDto } from './dto/add-klass-member.dto';
import { UpdateKlassMemberDto } from './dto/update-klass-member.dto';

@ApiBearerAuth()
@ApiTags('klasses')
@Controller('api/v1/klasses')
@UseGuards(JwtAuthGuard)
export class KlassesController {
  constructor(private readonly klassesService: KlassesService) {}

  @Post()
  create(@Body() createKlassDto: CreateKlassDto, @Request() req) {
    return this.klassesService.create(createKlassDto, req.user);
  }

  @Get()
  findAll() {
    return this.klassesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.klassesService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateKlassDto: UpdateKlassDto,
    @Request() req,
  ) {
    return this.klassesService.update(id, updateKlassDto, req.user);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number, @Request() req) {
    return this.klassesService.remove(id, req.user);
  }

  @Get(':kid/members')
  readMembers(@Param('kid', ParseIntPipe) id: number) {
    return this.klassesService.findAllMembers(id);
  }

  @Post(':kid/members')
  addMember(
    @Body() addKlassMemberDto: AddKlassMemberDto,
    @Param('kid', ParseIntPipe) id: number,
    @Request() req,
  ) {
    return this.klassesService.addMember(id, addKlassMemberDto, req.user);
  }

  @Patch(':kid/members/:mid')
  updateMember(
    @Body() updateKlassMemberDto: UpdateKlassMemberDto,
    @Param('mid', ParseIntPipe, ParseIntPipe) id: number,
    @Request() req,
  ) {
    return this.klassesService.updateMember(id, updateKlassMemberDto, req.user);
  }

  @Delete(':kid/members/:mid')
  removeMember(@Param('mid', ParseIntPipe) id: number, @Request() req) {
    return this.klassesService.removeMember(id, req.user);
  }
}
