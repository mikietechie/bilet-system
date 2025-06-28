import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsInt, IsString, MinLength } from 'class-validator';

export class CreateTicketDto {
  @ApiProperty()
  @IsString()
  @MinLength(2)
  name: string;

  @ApiProperty()
  @IsInt()
  listid: number;

  @ApiProperty()
  @IsArray()
  questions: { id: number }[];
}
