import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { UpdateAccountDto } from './dto/update-account.dto';
import { ResetPasswordDto } from './dto/reset-password-dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/users/entities/user.entity';
import { Repository } from 'typeorm';
import { JwtPayloadDto } from 'src/auth/dto/jwt-payload-dto';
import { cmpPassword, hashPassword } from 'src/utils/hash.utils';
import { sendMail } from 'src/utils/mail.utils';
import { RecoverPasswordDto } from './dto/recover-password-dto';

@Injectable()
export class AccountsService {
  constructor(
    @InjectRepository(User) private usersRepository: Repository<User>,
  ) {}

  async findOne(user: JwtPayloadDto) {
    const u = await this.usersRepository.findOneBy({ id: user.userId });
    delete u.password;
    return u;
  }

  async update(updateAccountDto: UpdateAccountDto, token: JwtPayloadDto) {
    const u = await this.usersRepository.findOneBy({ id: token.userId });
    u.name = updateAccountDto.name;
    u.email = updateAccountDto.email;
    await this.usersRepository.save(u);
  }

  async resetPassword(
    resetPasswordDto: ResetPasswordDto,
    token: JwtPayloadDto,
  ) {
    const u = await this.usersRepository.findOneBy({ id: token.userId });
    if (!(await cmpPassword(resetPasswordDto.currentPassword, u.password))) {
      throw new UnauthorizedException();
    }
    if (
      resetPasswordDto.newPassword !== resetPasswordDto.newPasswordConfirmation
    ) {
      throw new BadRequestException();
    }
    u.password = await hashPassword(resetPasswordDto.newPassword);
    await this.usersRepository.save(u);
  }

  async recoverPassword(recoverPasswordDto: RecoverPasswordDto) {
    const u = await this.usersRepository.findOneBy({
      email: recoverPasswordDto.email,
    });

    if (!u) {
      throw new UnauthorizedException();
    }
    const otp = Math.random().toString(36).slice(-8);
    u.password = await hashPassword(otp);
    sendMail(u.email, 'Password recovery', `OTP\t: ${otp}`);
    await this.usersRepository.save(u);
  }

  async deleteAccount(token: JwtPayloadDto) {
    const u = await this.usersRepository.findOneBy({ id: token.userId });
    sendMail(u.email, 'Bye', 'See you soon');
    await this.usersRepository.softDelete(u);
  }
}
