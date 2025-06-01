import { IsInt, IsString, MinLength } from 'class-validator';

export class CreateQuestionDto {
  @IsString()
  @MinLength(2)
  title: string;

  @IsString()
  description: string;

  @IsInt()
  listid: number;
}
