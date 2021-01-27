'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Minimum_Requirements', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER.UNSIGNED,
      },
      GSA_Components: {
        type: Sequelize.STRING,
      },
      GSA_Min_Req: {
        type: Sequelize.STRING,
      },
      Rev_Ambulance: {
        type: Sequelize.STRING,
      },
      HALCORE: {
        type: Sequelize.STRING,
      },
      AMB: {
        type: Sequelize.STRING,
      },
      created_at: {
        type: Sequelize.DATE,
      },
      updated_at: {
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Minimum_Requirements');
  },
};
