import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType('Faq')
export class FaqType {
  @Field(() => ID)
  _id: string;

  @Field()
  question: string;

  @Field()
  answer: string;

  @Field()
  order: number;

  @Field()
  active: boolean;
}
