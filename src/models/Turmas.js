const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Turmas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
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
