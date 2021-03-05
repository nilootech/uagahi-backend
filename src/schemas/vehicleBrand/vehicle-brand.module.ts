import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { VehicleBrand, VehicleBrandSchema } from './vehicle-brand.schema';
import { VehicleBrandService } from './vehicle-brand.service';
import { VehicleBrandResolver } from './vehicle-brand.resolver';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: VehicleBrand.name, schema: VehicleBrandSchema },
    ]),
  ],
  providers: [VehicleBrandService, VehicleBrandResolver],
})
export class VehicleBrandModule {}
