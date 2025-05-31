import { IsString, MinLength } from 'class-validator';

export class CreateListDto {
  @IsString()
  @MinLength(2)
  name: string;
}
