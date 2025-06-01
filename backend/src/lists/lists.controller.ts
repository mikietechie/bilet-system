import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Request,
  ParseIntPipe,
  UseGuards,
} from '@nestjs/common';
import { ListsService } from './lists.service';
import { CreateListDto } from './dto/create-list.dto';
import { UpdateListDto } from './dto/update-list.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth/jwt-auth.guard';

@ApiBearerAuth()
@ApiTags('lists')
@Controller('api/v1/lists')
@UseGuards(JwtAuthGuard)
export class ListsController {
  constructor(private readonly listsService: ListsService) {}

  @Post()
  create(@Body() createListDto: CreateListDto, @Request() req) {
    return this.listsService.create(createListDto, req.user);
  }

  @Get()
  findAll() {
    return this.listsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.listsService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateListDto: UpdateListDto,
    @Request() req,
  ) {
    return this.listsService.update(id, updateListDto, req.user);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number, @Request() req) {
    return this.listsService.remove(id, req.user);
  }

  @Get('owned')
  findAllListsByOwner(@Request() req) {
    return this.listsService.findAllListsByOwner(req.user?.id);
  }

  // Questions
  @Get(':id/questions')
  findAllQuestions(@Param('id', ParseIntPipe) id: number) {
    return this.listsService.findAllQuestions(id);
  }
}
