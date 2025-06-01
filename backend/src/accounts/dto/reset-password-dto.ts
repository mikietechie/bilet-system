import { IsString, MaxLength, MinLength } from 'class-validator';

export class ResetPasswordDto {
  @IsString()
  @MinLength(4)
  @MaxLength(32)
  currentPassword: string;
  @IsString()
  @MinLength(4)
  @MaxLength(32)
  newPassword: string;
  @IsString()
  @MinLength(4)
  @MaxLength(32)
  newPasswordConfirmation: string;
}
