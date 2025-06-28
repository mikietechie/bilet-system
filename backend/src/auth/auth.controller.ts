import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Redirect,
  Res,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register-dto';
import { LoginDto } from './dto/login-dto';
import { conf } from 'src/conf';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { Response } from 'express';

@ApiTags('auth')
@Controller('api/v1/auth/')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  async register(@Body() registerDto: RegisterDto): Promise<number> {
    return this.authService.register(registerDto);
  }

  @Post('login')
  async login(@Body() loginDto: LoginDto) {
    return this.authService.login(loginDto);
  }

  @ApiResponse({ status: HttpStatus.TEMPORARY_REDIRECT })
  @Get('activate/:email/:key')
  @HttpCode(307)
  async activate(
    @Res() res: Response,
    @Param('email') email: string,
    @Param('key') key: string,
  ) {
    try {
      this.authService.activate({ email, key });
      return Redirect(
        conf.urls.activateRedirect,
        HttpStatus.TEMPORARY_REDIRECT,
      );
    } catch (error) {
      console.error(error);
      return res.status(400).send('Error');
    }
  }
}
