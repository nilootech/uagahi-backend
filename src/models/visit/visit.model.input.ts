import { Field, InputType } from '@nestjs/graphql';
import { CoordinateModelInput } from '../coordinate/coordinate.model.input';
import { IsIP } from 'class-validator';

@InputType()
export class VisitModelInput {
  @Field()
  @IsIP('4')
  ip: string;

  @Field()
  coordinate: CoordinateModelInput;
}
