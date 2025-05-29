import { IsBoolean, IsInt } from 'class-validator';

export class AddGroupMemberDto {
  @IsInt()
  userId: number;

  @IsBoolean()
  isAdmin: boolean;
}
