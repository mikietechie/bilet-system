import { IsBoolean } from 'class-validator';

export class UpdateGroupMemberDto {
  @IsBoolean()
  isAdmin: boolean;

  @IsBoolean()
  isActive: boolean;
}
