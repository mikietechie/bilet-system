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
import { AnswersService } from './answers.service';
import { CreateAnswerDto } from './dto/create-answer.dto';
import { UpdateAnswerDto } from './dto/update-answer.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth/jwt-auth.guard';

@ApiBearerAuth()
@ApiTags('answers')
@Controller('api/v1/answers')
@UseGuards(JwtAuthGuard)
export class AnswersController {
  constructor(private readonly answersService: AnswersService) {}

  @Post()
  create(@Body() createAnswerDto: CreateAnswerDto, @Request() req) {
    return this.answersService.create(createAnswerDto, req.user);
  }

  @Get()
  findAll() {
    return this.answersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.answersService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateAnswerDto: UpdateAnswerDto,
    @Request() req,
  ) {
    return this.answersService.update(id, updateAnswerDto, req.user);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number, @Request() req) {
    return this.answersService.remove(id, req.user);
  }
}
