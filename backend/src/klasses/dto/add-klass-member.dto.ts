import { IsBoolean, IsInt } from 'class-validator';

export class AddKlassMemberDto {
  @IsInt()
  userId: number;

  @IsBoolean()
  isAdmin: boolean;
}
