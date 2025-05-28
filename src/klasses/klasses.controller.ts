import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { KlassesService } from './klasses.service';
import { CreateKlassDto } from './dto/create-klass.dto';
import { UpdateKlassDto } from './dto/update-klass.dto';

@Controller('klasses')
export class KlassesController {
  constructor(private readonly klassesService: KlassesService) {}

  @Post()
  create(@Body() createKlassDto: CreateKlassDto) {
    return this.klassesService.create(createKlassDto);
  }

  @Get()
  findAll() {
    return this.klassesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.klassesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateKlassDto: UpdateKlassDto) {
    return this.klassesService.update(+id, updateKlassDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.klassesService.remove(+id);
  }
}
