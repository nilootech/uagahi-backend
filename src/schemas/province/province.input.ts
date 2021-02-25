import { Field, InputType } from '@nestjs/graphql';
import { IsBoolean, MaxLength } from 'class-validator';

@InputType()
export class ProvinceInput {
  @Field()
  @MaxLength(100)
  name: string;

  @Field()
  @MaxLength(100)
  code: string;

  @Field()
  @IsBoolean()
  active: boolean;
}
