import { IBase } from './interface';

export const idAsIBase = (id: number): IBase => Object.assign({ id }) as any;
export const idAsIBaseAny = (id: number) => Object.assign({ id }) as any;
