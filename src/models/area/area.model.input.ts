import { Field, InputType } from '@nestjs/graphql';
import { IsString, MaxLength } from 'class-validator';

@InputType()
export class AreaModelInput {
  @Field()
  @MaxLength(100)
  @IsString()
  areaName: string;

  @Field()
  @MaxLength(100)
  @IsString()
  neighbourhood: string;
}
