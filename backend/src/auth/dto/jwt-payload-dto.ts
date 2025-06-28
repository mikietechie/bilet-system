import { ApiProperty } from '@nestjs/swagger';
import { UserRole } from 'src/users/entities/user.entity';

export class JwtPayloadDto {
  @ApiProperty()
  email: string;
  @ApiProperty()
  userId: number;
  @ApiProperty()
  role: UserRole;
}
