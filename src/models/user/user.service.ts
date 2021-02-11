import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './user.schema';
import { Model } from 'mongoose';
import { CreateUserInput } from './inputs/create-user.input';
import { Injectable, InternalServerErrorException, UnauthorizedException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { AuthCredentialDto } from '../../auth/jwt/dto/auth-credential.dto';
import { SignInDto } from './signin.dto';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {
  }

  async signUp(createUserInput: CreateUserInput): Promise<User> {
    const { name, birthDate, userName, password } = createUserInput;
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    createUserInput.password = hashedPassword;
    const user = new User();
    user.userName = userName;
    user.salt = salt;
    user.password = hashedPassword;
    user.birthDate = birthDate;
    user.name = name;
    const createdUser = new this.userModel(user);
    try {
      return await createdUser.save();
    } catch (error) {
      throw  new InternalServerErrorException(error.message);
    }
  }

  async signInComplete(signInDto: SignInDto): Promise<void> {
    const { userId, accessToken, refreshToken } = signInDto;
    const user = await this.getUserById(userId);
    user.refreshToken = refreshToken;
    user.accessToken = accessToken;
    await user.save();
  }

  async validateUserPassword(authCredentialDto: AuthCredentialDto): Promise<string> {
    const { password, username } = authCredentialDto;
    const user = await this.getUserByUserName(username);
    const hash = await bcrypt.hash(password, user.salt);
    if (hash === user.password) {
      return user._id;
    }
    return null;
  }

  async findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }

  async getUserByUserName(userName: string): Promise<UserDocument> {
    const user = await this.userModel.findOne({ userName });
    if (!user) {
      throw  new UnauthorizedException('user not found');
    }
    return user;
  }

  async getUserById(userId: string): Promise<UserDocument> {
    const user = await this.userModel.findById(userId);
    if (!user) {
      throw  new UnauthorizedException('user not found');
    }
    return user;
  }
}