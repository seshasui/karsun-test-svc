import { Field, ObjectType, ID } from 'type-graphql';
import {
  Model,
  Table,
  Column,
  PrimaryKey,
  AutoIncrement,
} from 'sequelize-typescript';

@ObjectType()
@Table
export class Employee extends Model<Employee> {
  @Field(() => ID)
  @AutoIncrement
  @PrimaryKey
  @Column
  id: string;

  @Field()
  @Column
  fullName: string;

  @Field()
  @Column
  employeeEmail: string;

  @Field()
  @Column
  role: string;
}
