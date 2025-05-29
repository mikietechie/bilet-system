import { UserRole } from 'src/users/entities/user.entity';

export class JwtPayloadDto {
  email: string;
  userId: number;
  role: UserRole;
}
