import { Field, InputType } from '@nestjs/graphql';
import { IsLatitude, IsLongitude } from 'class-validator';

@InputType()
export class CoordinateModelInput {
  @Field()
  @IsLatitude()
  lat: string;

  @Field()
  @IsLongitude()
  lng: string;
}
