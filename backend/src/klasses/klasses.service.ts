import { Injectable } from '@nestjs/common';
import { CreateKlassDto } from './dto/create-klass.dto';
import { UpdateKlassDto } from './dto/update-klass.dto';

@Injectable()
export class KlassesService {
  create(createKlassDto: CreateKlassDto) {
    return 'This action adds a new klass';
  }

  findAll() {
    return `This action returns all klasses`;
  }

  findOne(id: number) {
    return `This action returns a #${id} klass`;
  }

  update(id: number, updateKlassDto: UpdateKlassDto) {
    return `This action updates a #${id} klass`;
  }

  remove(id: number) {
    return `This action removes a #${id} klass`;
  }
}
