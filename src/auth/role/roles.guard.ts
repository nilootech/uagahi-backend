import {
  Injectable,
  CanActivate,
  ExecutionContext,
  UnauthorizedException,
  Inject,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { ROLES_KEY } from './role.decorator';
import { RoleEnum } from './role.enum';
import { GqlExecutionContext } from '@nestjs/graphql';
import { UserService } from '../../schemas/user/user.service';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(
    private readonly reflector: Reflector,
    private readonly userService: UserService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const ctx = GqlExecutionContext.create(context);

    const requiredRoles = this.reflector.getAllAndOverride<RoleEnum[]>(
      ROLES_KEY,
      [ctx.getHandler(), ctx.getClass()],
    );
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
    if (user?.roles.includes(RoleEnum.Admin)) return true;
    return requiredRoles.some(role => user.roles?.includes(role));
  }
}
