import {
  CreateDateColumn,
  DeleteDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  VersionColumn,
} from 'typeorm';

export abstract class BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;

  @VersionColumn()
  _version: number;
}
export abstract class BaseDto {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
  _version: number;
}

export interface IBase {
  id: number;
}

export const idAsIBase = (id: number): IBase => Object.assign({ id }) as any;
export const idAsIBaseAny = (id: number) => Object.assign({ id }) as any;
