import { Field, InputType } from '@nestjs/graphql';
import { IsDateString } from 'class-validator';

@InputType()
export class ManageTimeModelInput {
  @Field()
  @IsDateString()
  publishTime: Date;
}
