import { Field, InputType } from '@nestjs/graphql';
import { UserType } from '../../schemas/user/user.type';
import { IsNumber, Max, Min } from 'class-validator';
import { IsNumberValidateOption } from '../../constants/index.constant';

@InputType()
export class RateModelInput {
  @Field()
  @IsNumber(IsNumberValidateOption)
  @Min(1)
  @Max(5)
  rate: number;

  @Field(() => UserType)
  user: UserType;
}
