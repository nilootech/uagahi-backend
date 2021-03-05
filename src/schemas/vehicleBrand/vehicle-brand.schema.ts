import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type VehicleBrandDocument = VehicleBrand & Document;

@Schema()
export class VehicleBrand {
  @Prop({ type: String, unique: true, index: true })
  name: string;

  @Prop({ type: [String] })
  models: string[];
}

export const VehicleBrandSchema = SchemaFactory.createForClass(VehicleBrand);
