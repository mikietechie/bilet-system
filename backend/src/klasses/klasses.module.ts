import { Module } from '@nestjs/common';
import { KlassesService } from './klasses.service';
import { KlassesController } from './klasses.controller';

@Module({
  controllers: [KlassesController],
  providers: [KlassesService],
})
export class KlassesModule {}
