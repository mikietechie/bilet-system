import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean } from 'class-validator';

export class UpdateGroupUserDto {
  @ApiProperty()
  @IsBoolean()
  isActive: boolean;
}
