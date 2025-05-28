import { UserRole } from '../entities/user.entity';

export class CreateUserDto {
  name: string;
  role: UserRole;
  email: string;
  password: string;
}
