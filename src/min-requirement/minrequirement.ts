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
export class MinimumRequirement extends Model<MinimumRequirement> {
  @Field(() => ID)
  @AutoIncrement
  @PrimaryKey
  @Column
  id: number;

  @Field()
  @Column
  gsaComponents: string;

  @Field()
  @Column
  gsaMinReq: string;

  @Field()
  @Column
  revAmbulance: string;

  @Field()
  @Column
  halcore: string;

  @Field()
  @Column
  amb: string;
}
