import { Field, InputType } from '@nestjs/graphql';
import { MaxLength } from 'class-validator';
import { AreaModelInput } from '../../models/area/area.model.input';

@InputType()
export class CityInput {
  @Field()
  @MaxLength(100)
  name: string;

  @Field()
  @MaxLength(100)
  code: string;

  @Field(() => [AreaModelInput])
  areas: AreaModelInput[];

  @Field()
  active: boolean;
}
