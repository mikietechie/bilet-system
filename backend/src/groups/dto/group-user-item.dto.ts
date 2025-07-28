import { ApiProperty } from '@nestjs/swagger';

export class GroupUsersResponseItemDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  userId: number;

  @ApiProperty()
  groupId: number;

  @ApiProperty()
  isActive: boolean;

  @ApiProperty()
  userName: string;

  @ApiProperty()
  userEmail: string;
}
