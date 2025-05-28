import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { hashPassword } from 'src/utils/hash.utils';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<number> {
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
