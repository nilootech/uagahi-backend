import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './user.schema';
import { Model } from 'mongoose';
import { CreateUserInput } from './inputs/create-user.input';
import { Injectable, InternalServerErrorException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { AuthCredentialDto } from '../../auth/jwt/dto/auth-credential.dto';
import has = Reflect.has;

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

  async validateUserPassword(authCredentialDto: AuthCredentialDto): Promise<string> {
    const { password, username } = authCredentialDto;
    const user = await this.userModel.findOne({ userName:username });

    if (user) {
      const hash = await bcrypt.hash(password, user.salt);
      if (hash === user.password) {
        return user.userName;
      }
    }
    return null;
  }

  async findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }

  async getUserByUserName(userName: string): Promise<User> {
    return this.userModel.findOne({ userName });
  }
}