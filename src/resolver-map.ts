import { EmployeeResolver } from './employee/employee-resolver';

import { GraphQLScalarType } from 'graphql';
import { Kind } from 'graphql/language';
import { merge } from 'lodash';

export const BaseResolvers = {
  Date: new GraphQLScalarType({
    name: 'Date',
    description: 'Date custom scalar type',
    parseValue(value) {
      return new Date(value); // value from the client
    },
    serialize(value) {
      return value; // value sent to the client
    },
    parseLiteral(ast) {
      if (ast.kind === Kind.INT) {
        return new Date(parseInt(ast.value, 10)); // ast value is always in string format
      }
      return null;
    },
  }),
};

const resolverMap = merge(BaseResolvers, EmployeeResolver);
export default resolverMap;
