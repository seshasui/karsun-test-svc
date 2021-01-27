import { Sequelize } from 'sequelize-typescript';

import { MinimumRequirement } from './min-requirement/minrequirement';

export const sequelize = new Sequelize('minReq', 'afp_user', 'test', {
  host: 'localhost',
  dialect: 'mysql',
  models: [MinimumRequirement],
  repositoryMode: true,
});
