import { IsBoolean, IsInt, IsString, MinLength } from 'class-validator';

export class CreateAnswerDto {
  @IsString()
  @MinLength(2)
  title: string;

  @IsString()
  text: string;

  @IsBoolean()
  isPublic: boolean;

  @IsInt()
  questionId: number;
}
