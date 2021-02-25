import { Field, ID, ObjectType } from '@nestjs/graphql';
import { DoingModelType } from '../doing/doing.model.type';

@ObjectType('TelegramModel')
export class TelegramModelType {
  @Field(() => ID)
  _id: string;

  @Field()
  imageUrl: string;

  @Field()
  text: string;

  @Field()
  price: number;

  @Field()
  doing: DoingModelType;
}
