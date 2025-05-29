import { Body, Controller, Get, Param, Post, Redirect } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register-dto';
import { LoginDto } from './dto/login-dto';
import { conf } from 'src/conf';

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

  @Get('activate/:email/:key')
  async activate(@Param('email') email: string, @Param('key') key: string) {
    try {
      this.authService.activate({ email, key });
      return Redirect(conf.urls.activateRedirect);
    } catch (error) {
      console.error(error);
      return 'Error';
    }
  }
}
