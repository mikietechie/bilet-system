import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/users/entities/user.entity';
import { Repository } from 'typeorm';
import { RegisterDto } from './dto/register-dto';
import { cmpPassword, hashPassword } from 'src/utils/hash.utils';
import { LoginDto } from './dto/login-dto';
import { sendMail } from 'src/utils/mail.utils';
import { ActivateDto } from './dto/activate-dto';
import { getActivationLink } from 'src/users/users.utils';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    private jwtService: JwtService,
  ) {}

  async register(registerDto: RegisterDto): Promise<number> {
    const existingUser = await this.userRepository.findOneBy({
      email: registerDto.email,
    });
    if (existingUser) {
      throw new BadRequestException('Email is already in use!');
    }
    const u = new User();
    u.name = registerDto.name;
    u.email = registerDto.email;
    u.password = await hashPassword(registerDto.password);
    await this.userRepository.save(u);
    const activationLink = getActivationLink(u);
    sendMail(
      u.email,
      `Welcome ${u.name}`,
      `Here is your activation link:\n${activationLink}`,
    );
    return u.id;
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
    const user = await this.userRepository.findOneBy({ email: loginDto.email });
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

  async activate(loginDto: ActivateDto) {
    const user = await this.userRepository.findOneBy({ email: loginDto.email });
    if (!user) {
      throw new UnauthorizedException();
    }
    user.isActive = true;
    await this.userRepository.save(user);
  }
}
