import { IsBoolean, IsString, MinLength } from 'class-validator';

export class CreateGroupDto {
  @IsString()
  @MinLength(2)
  name: string;

  @IsBoolean()
  isPublic: boolean;

  @IsBoolean()
  membersNeedActivation: boolean;
}
