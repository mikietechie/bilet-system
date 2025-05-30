import { IsBoolean, IsString, MinLength } from 'class-validator';

export class CreateKlassDto {
  @IsString()
  @MinLength(2)
  name: string;

  @IsBoolean()
  isPublic: boolean;

  @IsBoolean()
  membersNeedActivation: boolean;
}
