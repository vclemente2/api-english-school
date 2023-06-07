/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Matriculas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      status: {
        type: Sequelize.STRING
      },
      estudante_id: {
        allowNull: false,
        references: {
          model: {
            tableName: 'Pessoas'
          },
          key: 'id'
        },
        type: Sequelize.INTEGER
      },
      turma_id: {
        allowNull: false,
        references: {
          model: {
            tableName: 'Turmas'
          },
          key: 'id'
        },
        type: Sequelize.INTEGER
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
  async down(queryInterface) {
    await queryInterface.dropTable('Matriculas');
  }
};
