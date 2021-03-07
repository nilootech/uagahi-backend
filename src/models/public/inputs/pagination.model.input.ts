import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class PaginationModelInput {
  @Field()
  skip: number;

  @Field()
  limit: number;
}
