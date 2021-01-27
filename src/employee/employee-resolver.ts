import { Resolver, Query, Arg, Mutation } from 'type-graphql';

import { Employee } from './employee';
import { EmployeeInput } from './employee-input';
import { sequelize } from '../sequelize';

@Resolver(() => Employee)
export class EmployeeResolver {
  private readonly EmployeeRepository = sequelize.getRepository(Employee);

  @Query(() => Employee)
  async getEmployee(@Arg('id') id: string): Promise<Employee | null> {
    return await this.EmployeeRepository.findByPk(id);
  }

  @Mutation(() => Employee)
  async createEmployee(@Arg('Employee') EmployeeInput: EmployeeInput): Promise<Employee> {
    const newEmployee = (await this.EmployeeRepository.create(EmployeeInput)).save();
    return newEmployee;
  }
}
