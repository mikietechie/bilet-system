import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
  Request,
  UseGuards,
} from '@nestjs/common';
import { ExaminationsService } from './examinations.service';
import { CreateExaminationDto } from './dto/create-examination.dto';
import { UpdateExaminationDto } from './dto/update-examination.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth/jwt-auth.guard';

@ApiBearerAuth()
@ApiTags('examinations')
@Controller('api/v1/examinations')
@UseGuards(JwtAuthGuard)
export class ExaminationsController {
  constructor(private readonly examinationsService: ExaminationsService) {}

  @Post()
  create(@Body() createExaminationDto: CreateExaminationDto, @Request() req) {
    return this.examinationsService.create(createExaminationDto, req.user);
  }

  @Get()
  findAll() {
    return this.examinationsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.examinationsService.findOne(id);
  }

  @Get(':id/marks')
  findAllMarks(@Param('id', ParseIntPipe) id: number) {
    return this.examinationsService.findAllMarks(id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateExaminationDto: UpdateExaminationDto,
    @Request() req,
  ) {
    return this.examinationsService.update(id, updateExaminationDto, req.user);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number, @Request() req) {
    return this.examinationsService.remove(id, req.user);
  }
}
