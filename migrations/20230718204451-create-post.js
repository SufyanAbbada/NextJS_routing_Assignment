'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Posts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      date: {
        type: Sequelize.DATE
      },
      frontcontent: {
        type: Sequelize.STRING
      },
      maincontent: {
        type: Sequelize.STRING
      },
      belowtitle: {
        type: Sequelize.STRING
      },
      belowcontent: {
        type: Sequelize.STRING
      },
      username: {
        type: Sequelize.STRING
      },
      postimage: {
        type: Sequelize.STRING
      },
      userimage: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Posts');
  }
};