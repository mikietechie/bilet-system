import { IsArray, IsInt, IsString, MinLength } from 'class-validator';

export class CreateTicketDto {
  @IsString()
  @MinLength(2)
  name: string;

  @IsInt()
  listid: number;

  @IsArray()
  questions: { id: number }[];
}
