import {
  BadRequestException,
  Injectable,
  NotFoundException,
  OnApplicationBootstrap,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User, UserRole } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { hashPassword } from 'src/utils/hash.utils';
import { conf } from 'src/conf';

@Injectable()
export class UsersService implements OnApplicationBootstrap {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async getUserFk(id: number): Promise<User | null> {
    try {
      return await this.usersRepository.findOneByOrFail({ id });
    } catch (error) {
      console.error(error);
      throw new NotFoundException(`User ${id} was not found!`);
    }
  }

  async findUserByEmail(email: string): Promise<User | null> {
    return await this.usersRepository.findOneBy({ email });
  }

  async onApplicationBootstrap() {
    const admin = await this.usersRepository.findOneBy({
      role: UserRole.ADMIN,
    });
    if (!admin) {
      const u = new User();
      u.name = conf.defaultAdmin.name;
      u.email = conf.defaultAdmin.email;
      u.password = await hashPassword(conf.defaultAdmin.password);
      u.role = UserRole.ADMIN;
      await this.usersRepository.save(u);
    }
  }

  async create(createUserDto: CreateUserDto): Promise<number> {
    const existing_user = this.findUserByEmail(createUserDto.email);
    if (existing_user) {
      throw new BadRequestException('Email is taken!');
    }
    const u = new User();
    u.name = createUserDto.name;
    u.email = createUserDto.email;
    u.password = await hashPassword(createUserDto.password);
    u.role = createUserDto.role;
    await this.usersRepository.save(u);
    return u.id;
  }

  async findAll(): Promise<User[]> {
    return await this.usersRepository.find();
  }

  async findOne(id: number): Promise<User | null> {
    return await this.usersRepository.findOneBy({ id });
  }

  async update(id: number, updateUserDto: UpdateUserDto): Promise<User> {
    const u = await this.usersRepository.findOneBy({ id });
    if (!u) {
      throw new NotFoundException();
    }
    u.name = updateUserDto.name;
    u.email = updateUserDto.email;
    u.isActive = updateUserDto.isActive;
    await this.usersRepository.save(u);
    return u;
  }

  async remove(id: number) {
    await this.usersRepository.delete(id);
  }
}
