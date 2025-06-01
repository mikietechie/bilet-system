import { Controller, Get, Body, Patch, Delete, Request } from '@nestjs/common';
import { AccountsService } from './accounts.service';
import { UpdateAccountDto } from './dto/update-account.dto';
import { ResetPasswordDto } from './dto/reset-password-dto';
import { RecoverPasswordDto } from './dto/recover-password-dto';

@Controller('accounts')
export class AccountsController {
  constructor(private readonly accountsService: AccountsService) {}
  @Get()
  findOne(@Request() req) {
    return this.accountsService.findOne(req.user);
  }

  @Patch(':id')
  update(@Request() req, @Body() updateAccountDto: UpdateAccountDto) {
    return this.accountsService.update(updateAccountDto, req.user);
  }

  @Patch('reset-password')
  resetPassword(@Request() req, @Body() resetPasswordDto: ResetPasswordDto) {
    return this.accountsService.resetPassword(resetPasswordDto, req.user);
  }

  @Patch('recover-password')
  recoverPassword(@Request() req, @Body() dto: RecoverPasswordDto) {
    return this.accountsService.recoverPassword(dto);
  }

  @Delete('delete-account')
  deleteAccount(@Request() req) {
    return this.accountsService.deleteAccount(req.user);
  }
}
