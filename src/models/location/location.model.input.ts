import { Field, InputType } from '@nestjs/graphql';
import { CoordinateModelInput } from '../coordinate/coordinate.model.input';
import { ProvinceInput } from '../../schemas/province/province.input';
import { CityInput } from '../../schemas/city/city.input';
import { AreaModelInput } from '../area/area.model.input';
import { MaxLength } from 'class-validator';
import { MaxAddressLength } from '../../constants/index.constant';

@InputType()
export class LocationModelInput {
  @Field()
  coordinate: CoordinateModelInput;

  @Field()
  province: ProvinceInput;

  @Field()
  city: CityInput;

  @Field()
  area: AreaModelInput;

  @Field()
  @MaxLength(MaxAddressLength)
  address: string;
}
