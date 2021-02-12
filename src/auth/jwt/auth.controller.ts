import { Body, Controller, Get, Post, Req } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthCredentialDto } from './dto/auth-credential.dto';
import { AuthLoginDto } from './dto/auth-login.dto';
import { Request } from 'express';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/signin')
  signIn(@Body() authCredentialDto: AuthCredentialDto): Promise<AuthLoginDto> {
    return this.authService.signIn(authCredentialDto);
  }

  @Get('/refresh-token')
  refreshToken(@Req() request: Request): Promise<AuthLoginDto> {
    return this.authService.refreshToken(request.header('_refreshToken'));
  }
}
