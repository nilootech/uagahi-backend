import { Field, ObjectType } from '@nestjs/graphql';
import { ProvinceType } from '../../schemas/province/province.type';
import { CityType } from '../../schemas/city/city.type';
import { AreaModelType } from '../area/area.model.type';
import { CoordinateModelType } from '../coordinate/coordinate.model.type';

@ObjectType('LocationModel')
export class LocationModelType {
  @Field(() => CoordinateModelType)
  coordinate: CoordinateModelType;

  @Field(() => ProvinceType)
  province: ProvinceType;

  @Field(() => CityType)
  city: CityType;

  @Field(() => AreaModelType)
  area: AreaModelType;

  @Field()
  address: string;
}
