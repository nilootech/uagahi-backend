import { Field, InputType } from '@nestjs/graphql';
import { IsString, MaxLength } from 'class-validator';
import {
  VehicleBrandNameMaxLength,
  VehicleBrandNameModelMaxLength,
} from '../../constants/index.constant';

@InputType()
export class VehicleBrandInput {
  @Field()
  @IsString()
  @MaxLength(VehicleBrandNameMaxLength)
  name: string;

  @Field(() => [String])
  @IsString({ each: true })
  @MaxLength(VehicleBrandNameModelMaxLength, { each: true })
  models: string[];
}
