import { VehicleBrandService } from './vehicle-brand.service';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateVehicleBrandInput } from './inputs/create-vehicle-brand.input';
import { VehicleBrandType } from './vehicle-brand.type';
import { RoleEnum } from '../../auth/role/role.enum';
import { Roles } from '../../auth/role/role.decorator';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from '../../auth/guard/auth-guard.service';
import { UpdateVehicleBrandInput } from './inputs/update-vehicle-brand.input';

@UseGuards(GqlAuthGuard)
@Roles(RoleEnum.Admin)
@Resolver(() => VehicleBrandType)
export class VehicleBrandResolver {
  constructor(private vehicleBrandService: VehicleBrandService) {}

  @Mutation(() => VehicleBrandType)
  createVehicleBrand(
    @Args('createVehicleBrandInput')
    createVehicleBrandInput: CreateVehicleBrandInput,
  ) {
    return this.vehicleBrandService.create(createVehicleBrandInput);
  }

  @Query(() => [VehicleBrandType])
  getAllVehicleBrand() {
    return this.vehicleBrandService.getAll();
  }

  @Mutation(() => VehicleBrandType)
  updateVehicleBrand(
    @Args('updateVehicleBrandInput')
    updateVehicleBrandInput: UpdateVehicleBrandInput,
  ) {
    return this.vehicleBrandService.update(updateVehicleBrandInput);
  }

  @Mutation(() => VehicleBrandType)
  removeVehicleBrand(@Args('id') id: string) {
    return this.vehicleBrandService.remove(id);
  }
}
