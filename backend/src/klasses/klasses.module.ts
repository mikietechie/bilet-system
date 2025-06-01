import { Module } from '@nestjs/common';
import { KlassesService } from './klasses.service';
import { KlassesController } from './klasses.controller';
import { Klass } from './entities/klass.entity';
import { KlassMember } from './entities/klass-member.entity';
import { User } from 'src/users/entities/user.entity';
import { UsersService } from 'src/users/users.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Klass, KlassMember, User])],
  controllers: [KlassesController],
  providers: [KlassesService, UsersService],
})
export class KlassesModule {}
