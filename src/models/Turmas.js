const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Turmas extends Model {
    static associate(models) {
      this.hasMany(models.Matriculas, {
        foreignKey: 'turma_id',
        as: 'matricula'
      });
      this.belongsTo(models.Pessoas, {
        foreignKey: 'docente_id',
        as: 'docente'
      });
      this.belongsTo(models.Niveis, { foreignKey: 'nivel_id', as: 'nivel' });
    }
  }
  Turmas.init(
    {
      data_inicio: DataTypes.DATEONLY
    },
    {
      sequelize,
      modelName: 'Turmas'
    }
  );
  return Turmas;
};
