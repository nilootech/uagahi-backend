import { registerEnumType } from '@nestjs/graphql';

export enum BodyStatusEnum {
  OnePiecePaint = 'OnePiecePaint',
  TwoPiecePaint = 'TwoPiecePaint',
  MultiPiecePaint = 'MultiPiecePaint',
  FullPainted = 'FullPainted',
  NonePainted = 'NonePainted',
  SomeScratches = 'SomeScratches',
}

registerEnumType(BodyStatusEnum, {
  name: 'BodyStatus',
});
