import { Field, InputType } from '@nestjs/graphql';
import { IsArray, IsString, MaxLength } from 'class-validator';
import {
  VehicleBrandNameMaxLength,
  VehicleBrandNameModelMaxLength,
} from '../../../constants/index.constant';

@InputType()
export class CreateVehicleBrandInput {
  @Field()
  @IsString()
  @MaxLength(VehicleBrandNameMaxLength)
  name: string;

  @Field(() => [String])
  @IsString({ each: true })
  @MaxLength(VehicleBrandNameModelMaxLength, { each: true })
  @IsArray()
  models: string[];
}
