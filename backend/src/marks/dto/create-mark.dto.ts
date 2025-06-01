import { IsObject, IsString } from 'class-validator';
import { IBase } from 'src/utils/base.utils';

export class CreateMarkDto {
  @IsString()
  name: string;

  @IsString()
  grade: string;

  @IsObject()
  examinationId: number;

  @IsObject()
  ticket: IBase;
}
