import { ApiProperty } from '@nestjs/swagger';

export class ActivateDto {
  @ApiProperty()
  email: string;
  @ApiProperty()
  key: string;
}
