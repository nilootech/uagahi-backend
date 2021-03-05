import { Field, InputType } from '@nestjs/graphql';
import { IsArray, MaxLength, MinLength } from 'class-validator';
import { VehicleBrandNameMaxLength } from '../../../constants/index.constant';

@InputType()
export class UpdateVehicleBrandInput {
  @Field()
  @MaxLength(24)
  @MinLength(24)
  _id: string;

  @Field()
  @MaxLength(VehicleBrandNameMaxLength)
  name: string;

  @Field(() => [String], { nullable: true })
  @MaxLength(VehicleBrandNameMaxLength, { each: true })
  @IsArray()
  models: string[];
}
