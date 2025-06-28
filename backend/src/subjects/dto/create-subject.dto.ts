import { ApiProperty } from '@nestjs/swagger';
import { SubjectLevel } from '../entities/subject.entity';

export class CreateSubjectDto {
  @ApiProperty()
  name: string;
  @ApiProperty()
  level: SubjectLevel;
}
