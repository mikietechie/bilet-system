import { Module } from '@nestjs/common';
import { GroupsService } from './groups.service';
import { GroupsController } from './groups.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Group } from './entities/group.entity';
import { User } from 'src/users/entities/user.entity';
import { UsersService } from 'src/users/users.service';
import { GroupMember } from './entities/group-member.entity';
import { GroupUsersService } from './group-users/group-users.service';
import { GroupUser } from './entities/group-user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Group, GroupMember, GroupUser, User])],
  controllers: [GroupsController],
  providers: [GroupsService, UsersService, GroupUsersService],
})
export class GroupsModule {}
