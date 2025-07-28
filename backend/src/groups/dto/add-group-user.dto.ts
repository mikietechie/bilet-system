import { ApiProperty } from '@nestjs/swagger';
import { IsEmail } from 'class-validator';

export class AddGroupUserDto {
  @ApiProperty()
  @IsEmail()
  email: string;
}
