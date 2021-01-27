import { Resolver, Query, Arg } from 'type-graphql';

import { MinimumRequirement } from './minrequirement';
import { sequelize } from '../sequelize';

@Resolver(() => MinimumRequirement)
export class MinimumRequirementResolver {
  //need to set this up
  private readonly MinimumRequirementRepo = sequelize.getRepository(
    MinimumRequirement,
  );

  @Query(() => MinimumRequirement)
  async getMinimumRequirement(
    @Arg('id') id: number,
  ): Promise<MinimumRequirement | null> {
    return await this.MinimumRequirementRepo.findByPk(id);
  }
}
