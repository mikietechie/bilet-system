import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsInt, IsString, MinLength } from 'class-validator';

export class CreateAnswerDto {
  @ApiProperty()
  @IsString()
  @MinLength(2)
  title: string;

  @ApiProperty()
  @IsString()
  text: string;

  @ApiProperty()
  @IsBoolean()
  isPublic: boolean;

  @ApiProperty()
  @IsInt()
  questionId: number;
}
