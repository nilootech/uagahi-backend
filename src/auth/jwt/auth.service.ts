import { Injectable } from '@nestjs/common';
import { UserService } from '../../models/user/user.service';
import { JwtService } from '@nestjs/jwt';
import { AuthCredentialDto } from './dto/auth-credential.dto';
import { JwtPayload } from './jwt-payload';
import { AuthLoginDto } from './dto/auth-login.dto';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async signIn(authCredentialDto: AuthCredentialDto): Promise<AuthLoginDto> {
    const userId = await this.userService.validateUserPassword(
      authCredentialDto,
    );
    const payload: JwtPayload = { userId };
    const accessToken = await this.jwtService.signAsync(payload, {
      expiresIn: 900000,
    });
    const refreshToken = await this.jwtService.signAsync(payload, {
      expiresIn: 6.048e8,
    });
    await this.userService.signInComplete({
      accessToken,
      refreshToken,
      userId,
    });

    return { accessToken, refreshToken };
  }
}
