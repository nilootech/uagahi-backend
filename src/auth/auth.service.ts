import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from '../models/user/user.service';
import { JwtService } from '@nestjs/jwt';
import { CreateUserInput } from '../models/user/inputs/create-user.input';
import { User } from '../models/user/user.schema';
import { AuthCredentialDto } from './dto/auth-credential.dto';
import { JwtPayload } from './jwt-payload';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService) {
  }

  async signIn(authCredentialDto: AuthCredentialDto): Promise<{ accessToken: string }> {
    const userName = await this.userService.validateUserPassword(authCredentialDto);
    if (!userName) {
      throw new UnauthorizedException();
    }
    const payload: JwtPayload = { userName };
    const accessToken = await this.jwtService.signAsync(payload);
    return { accessToken };
  }


}
