import {
  Injectable,
  CanActivate,
  ExecutionContext,
  UnauthorizedException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { ROLES_KEY } from './role.decorator';
import { Role } from './role.enum';
import { GqlExecutionContext } from '@nestjs/graphql';
import { UserService } from '../../models/user/user.service';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(
    private readonly reflector: Reflector,
    private readonly userService: UserService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const ctx = GqlExecutionContext.create(context);

    const requiredRoles = this.reflector.getAllAndOverride<Role[]>(ROLES_KEY, [
      ctx.getHandler(),
      ctx.getClass(),
    ]);
    if (!requiredRoles) {
      return true;
    }
    const req = ctx.getContext().req;
    const authHeader = req.headers.authorization as string;
    if (!authHeader) {
      throw new UnauthorizedException('token is not valid');
    }
    const token = authHeader.replace('Bearer ', '');
    const user = await this.userService.getUserByAccessToken(token);
    if (!user) return false;
    if (user?.roles.includes(Role.Admin)) return true;
    return requiredRoles.some(role => user.roles?.includes(role));
  }
}
