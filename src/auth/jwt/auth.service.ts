import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from '../../models/user/user.service';
import { JwtService } from '@nestjs/jwt';
import { AuthCredentialDto } from './dto/auth-credential.dto';
import { JwtPayload } from './jwt-payload';
import { AuthLoginDto } from './dto/auth-login.dto';
import { SignInDto } from '../../models/user/signin.dto';

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
    const accessToken = await this.generateAccessToken(payload);
    const refreshToken = await this.generateRefreshToken(payload);
    await this.userService.signInComplete({
      accessToken,
      refreshToken,
      userId,
    });

    return {
      accessToken,
      refreshToken,
    };
  }

  async refreshToken(refreshToken: string): Promise<AuthLoginDto> {
    const verifyToken = await this.userService.verifyToken(refreshToken);
    if (!verifyToken) {
      throw new UnauthorizedException('invalid refresh token');
    }
    const payload: JwtPayload = { userId: verifyToken.userId };
    const accessToken = await this.generateAccessToken(payload);
    const newRefreshToken = await this.generateRefreshToken(payload);

    await this.userService.refreshToken({
      accessToken,
      refreshToken: newRefreshToken,
      userId: verifyToken.userId,
    });
    return {
      accessToken,
      refreshToken: newRefreshToken,
    };
  }

  private async generateRefreshToken(payload: JwtPayload): Promise<string> {
    const refreshTokenExpire = 6.048e8;
    return await this.jwtService.signAsync(payload, {
      expiresIn: refreshTokenExpire,
    });
  }

  private async generateAccessToken(payload: JwtPayload): Promise<string> {
    const accessTokenExpire = 900000;
    return await this.jwtService.signAsync(payload, {
      expiresIn: accessTokenExpire,
    });
  }
}
