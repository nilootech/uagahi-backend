import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { UserService } from '../../models/user/user.service';
import { ConfigService } from '@nestjs/config';
import { JwtPayload } from './jwt-payload';
import { Injectable, UnauthorizedException } from '@nestjs/common';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    private userService: UserService, private readonly config: ConfigService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: config.get<string>('secret.key'),
    });
  }


  async validate(payload: JwtPayload) {
    const { userName } = payload;
    const user = await this.userService.getUserByUserName(userName);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}