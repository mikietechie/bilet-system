import { IsString } from 'class-validator';

export class UpdateAccountDto {
  @IsString()
  readonly name: string;
  @IsString()
  readonly email: string;
}
