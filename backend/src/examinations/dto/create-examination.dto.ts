import { IsBoolean, IsInt, IsString, MinLength } from 'class-validator';
import { IBase } from 'src/utils/base.utils';

export class CreateExaminationDto {
  @IsString()
  @MinLength(2)
  title: string;

  @IsString()
  date: Date;

  @IsBoolean()
  isPublic: boolean;

  @IsInt()
  list: IBase;
}
