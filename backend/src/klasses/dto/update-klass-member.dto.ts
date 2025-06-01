import { IsBoolean } from 'class-validator';

export class UpdateKlassMemberDto {
  @IsBoolean()
  isAdmin: boolean;

  @IsBoolean()
  isActive: boolean;
}
