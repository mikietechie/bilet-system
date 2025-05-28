import { PartialType } from '@nestjs/swagger';
import { CreateKlassDto } from './create-klass.dto';

export class UpdateKlassDto extends PartialType(CreateKlassDto) {}
