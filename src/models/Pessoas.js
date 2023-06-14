const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Pessoas extends Model {
    static associate(models) {
      this.hasMany(models.Matriculas, {
        foreignKey: 'estudante_id'
      });
      this.hasMany(models.Turmas, { foreignKey: 'docente_id', as: 'turmas' });
    }
  }
  Pessoas.init(
    {
      nome: DataTypes.STRING,
      ativo: DataTypes.BOOLEAN,
      email: DataTypes.STRING,
      role: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'Pessoas',
      paranoid: true
    }
  );
  return Pessoas;
};
