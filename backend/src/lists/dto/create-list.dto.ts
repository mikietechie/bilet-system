import { ApiProperty } from '@nestjs/swagger';
import { IsString, MinLength } from 'class-validator';

export class CreateListDto {
  @ApiProperty()
  @IsString()
  @MinLength(2)
  name: string;
}
