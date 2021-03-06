import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './user.schema';
import { Model } from 'mongoose';
import { CreateUserInput } from './inputs/create-user.input';
import {
  Injectable,
  InternalServerErrorException,
  UnauthorizedException,
} from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { AuthCredentialDto } from '../../auth/jwt/dto/auth-credential.dto';
import { SignInDto } from './signin.dto';
import { RoleEnum } from '../../auth/role/role.enum';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { JwtPayload } from '../../auth/jwt/jwt-payload';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name)
    private userModel: Model<UserDocument>,
    private config: ConfigService,
  ) {}

  async signUp(createUserInput: CreateUserInput): Promise<User> {
    const { name, birthDate, email, password } = createUserInput;
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    createUserInput.password = hashedPassword;
    const user = new User();
    user.email = email;
    user.salt = salt;
    user.password = hashedPassword;
    user.birthDate = birthDate;
    user.name = name;
    user.roles = [RoleEnum.User];
    user.accounts = [createUserInput.account];
    const createdUser = new this.userModel(user);
    try {
      return await createdUser.save();
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }

  async signInComplete(signInDto: SignInDto): Promise<void> {
    const { userId, accessToken, refreshToken } = signInDto;
    const user = await this.getUserById(userId);
    user.refreshToken = refreshToken;
    user.accessToken = accessToken;
    await user.save();
  }

  async validateUserPassword(
    authCredentialDto: AuthCredentialDto,
  ): Promise<string> {
    const { password, email } = authCredentialDto;
    const user = await this.getUserByEmail(email);
    const hash = await bcrypt.hash(password, user.salt);
    if (hash === user.password) {
      return user._id;
    }
    return null;
  }

  async findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }

  async getUserByEmail(email: string): Promise<UserDocument> {
    const user = await this.userModel.findOne({ email });
    if (!user) {
      throw new UnauthorizedException('user not found');
    }
    return user;
  }

  async getUserById(userId: string): Promise<UserDocument> {
    const user = await this.userModel.findById(userId);
    if (!user) {
      throw new UnauthorizedException('user not found');
    }
    return user;
  }

  async verifyToken(authToken: string): Promise<JwtPayload> {
    const jwtService = new JwtService({
      secret: this.config.get<string>('secret.key'),
      signOptions: {
        expiresIn: this.config.get<number>('secret.expire'),
      },
    });
    return await jwtService.verifyAsync(authToken, { ignoreExpiration: false });
  }

  async getUserByAccessToken(accessToken: string): Promise<UserDocument> {
    const verifyToken = await this.verifyToken(accessToken);
    if (!verifyToken) {
      throw new UnauthorizedException('invalid access token');
    }
    const user = await this.userModel.findOne({ accessToken });
    if (!user) {
      throw new UnauthorizedException('invalid access token');
    }
    return user;
  }

  async getUserByRefreshToken(refreshToken: string): Promise<UserDocument> {
    const verifyToken = await this.verifyToken(refreshToken);
    if (!verifyToken) {
      throw new UnauthorizedException('invalid refresh token');
    }
    const user = await this.userModel.findOne({ refreshToken });
    if (!user) {
      throw new UnauthorizedException('invalid refresh token');
    }
    return user;
  }

  async refreshToken(signInDto: SignInDto): Promise<void> {
    const { refreshToken, accessToken, userId } = signInDto;
    const user = await this.getUserById(userId);
    user.refreshToken = refreshToken;
    user.accessToken = accessToken;
    await user.save();
  }
}
