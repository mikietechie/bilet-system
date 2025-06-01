import { Module } from '@nestjs/common';
import { GroupsService } from './groups.service';
import { GroupsController } from './groups.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Group } from './entities/group.entity';
import { User } from 'src/users/entities/user.entity';
import { UsersService } from 'src/users/users.service';
import { GroupMember } from './entities/group-member.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Group, GroupMember, User])],
  controllers: [GroupsController],
  providers: [GroupsService, UsersService],
})
export class GroupsModule {}
