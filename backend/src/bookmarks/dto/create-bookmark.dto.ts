import { ApiProperty } from '@nestjs/swagger';

export class CreateBookmarkDto {
  @ApiProperty()
  iid: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  entity: string;
}
