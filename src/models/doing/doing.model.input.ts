import { Field, InputType } from '@nestjs/graphql';
import { IsBoolean, IsDateString } from 'class-validator';

@InputType()
export class DoingModelInput {
  @Field()
  @IsBoolean()
  active: boolean;

  @Field()
  @IsBoolean()
  doing: boolean;

  @Field()
  @IsDateString()
  doingDate: Date;
}
