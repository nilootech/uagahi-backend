import { Field, InputType } from '@nestjs/graphql';
import { UserType } from '../../schemas/user/user.type';
import { IsNumber } from 'class-validator';
import { IsNumberValidateOption } from '../../constants/index.constant';

@InputType()
export class RateModelInput {
  @Field()
  @IsNumber(IsNumberValidateOption)
  rate: number;

  @Field(() => UserType)
  user: UserType;
}
