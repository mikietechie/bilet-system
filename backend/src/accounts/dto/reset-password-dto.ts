import { ApiProperty } from '@nestjs/swagger';
import { IsString, MaxLength, MinLength } from 'class-validator';

export class ResetPasswordDto {
  @ApiProperty()
  @IsString()
  @MinLength(4)
  @MaxLength(32)
  currentPassword: string;

  @ApiProperty()
  @IsString()
  @MinLength(4)
  @MaxLength(32)
  newPassword: string;

  @ApiProperty()
  @IsString()
  @MinLength(4)
  @MaxLength(32)
  newPasswordConfirmation: string;
}
