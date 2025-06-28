import { ApiProperty } from '@nestjs/swagger';
import { IsObject, IsString } from 'class-validator';
import { IBase } from 'src/common/base/interface';

export class CreateMarkDto {
  @ApiProperty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsString()
  grade: string;

  @ApiProperty()
  @IsObject()
  examinationId: number;

  @ApiProperty()
  @IsObject()
  ticket: IBase;
}
