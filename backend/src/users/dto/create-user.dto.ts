import { IsString } from 'class-validator';
import { UserRole } from '../entities/user.entity';

export class CreateUserDto {
  @IsString()
  readonly name: string;

  @IsString()
  readonly role: UserRole;

  @IsString()
  readonly email: string;

  @IsString()
  readonly password: string;
}
