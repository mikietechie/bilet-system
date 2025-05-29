import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/users/entities/user.entity';
import { Repository } from 'typeorm';
import { RegisterDto } from './dto/register-dto';
import { cmpPassword } from 'src/utils/hash.utils';
import { LoginDto } from './dto/login-dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    private jwtService: JwtService,
  ) {}

  async register(registerDto: RegisterDto): Promise<User> {
    const u = new User();
    u.name = registerDto.name;
    u.email = registerDto.email;
    u.password = registerDto.password;
    return await this.userRepository.save(u);
  }
  async validateUser(email: string, password: string): Promise<User | null> {
    const user = await this.userRepository.findOneBy({ email });
    if (user) {
      if (await cmpPassword(password, user.password)) {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { password, ...u } = user;
        return u as never as User;
      }
    }
    return null;
  }
  async login(loginDto: LoginDto) {
    console.log(await this.userRepository.find());
    const user = await this.userRepository.findOneBy({ email: loginDto.email });
    console.log({ user, loginDto });
    if (!user) {
      throw new UnauthorizedException();
    }
    if (!(await cmpPassword(loginDto.password, user.password))) {
      throw new UnauthorizedException();
    }
    const payload = {
      email: user.email,
      sub: user.id,
      role: user.role,
    };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
