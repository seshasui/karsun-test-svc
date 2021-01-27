import { Sequelize } from 'sequelize-typescript';

import { Employee } from './employee/employee';

export const sequelize = new Sequelize('afp', 'afp_user', 'test', {
  host: 'localhost',
  dialect: 'mysql',
  models: [Employee],
  repositoryMode: true,
});
