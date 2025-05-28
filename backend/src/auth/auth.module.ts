import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/users/entities/user.entity';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { conf } from 'src/conf';

@Module({
  imports: [
    PassportModule,
    ,
    JwtModule.register({
      secret: conf.jwt.secret,
      signOptions: { expiresIn: conf.jwt.lifespan },
    }),
    TypeOrmModule.forFeature([User]),
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
