const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Matriculas extends Model {
    static associate(models) {
      this.belongsTo(models.Pessoas, {
        foreignKey: 'estudante_id',
        as: 'estudante'
      });
      this.belongsTo(models.Turmas, {
        foreignKey: 'turma_id',
        as: 'turma'
      });
    }
  }
  Matriculas.init(
    {
      status: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'Matriculas',
      paranoid: true
    }
  );
  return Matriculas;
};
