import { IsBoolean, IsInt, IsString, MinLength } from 'class-validator';

export class CreateNoteDto {
  @IsString()
  @MinLength(2)
  title: string;

  @IsString()
  description: string;

  @IsBoolean()
  isPublic: boolean;

  @IsInt()
  subjectId: number;
}
