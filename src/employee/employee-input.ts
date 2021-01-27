import { Field, InputType } from 'type-graphql';

@InputType()
export class EmployeeInput {
  @Field()
  fullName: string;

  @Field()
  employeeEmail: string;

  @Field()
  role: string;
}
