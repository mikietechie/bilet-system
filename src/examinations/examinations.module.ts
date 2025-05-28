import { Module } from '@nestjs/common';
import { ExaminationsService } from './examinations.service';
import { ExaminationsController } from './examinations.controller';

@Module({
  controllers: [ExaminationsController],
  providers: [ExaminationsService],
})
export class ExaminationsModule {}
