import { SubjectLevel } from '../entities/subject.entity';

export class CreateSubjectDto {
  name: string;
  level: SubjectLevel;
}
