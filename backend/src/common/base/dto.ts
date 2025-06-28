export abstract class BaseDto {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
  _version: number;
}
