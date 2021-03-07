import { SortTypeEnum } from '../enums/sort-type.enum';
import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class SortInput {
  @Field()
  fieldName: string;

  @Field(() => SortTypeEnum)
  sortType: SortTypeEnum;
}
