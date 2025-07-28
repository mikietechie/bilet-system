import { ApiProperty } from '@nestjs/swagger';

export class GroupMembersResponseItemDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  userId: number;

  @ApiProperty()
  groupId: number;

  @ApiProperty()
  isActive: boolean;

  @ApiProperty()
  isAdmin: boolean;

  @ApiProperty()
  userName: string;

  @ApiProperty()
  userEmail: string;
}
