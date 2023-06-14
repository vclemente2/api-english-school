/* eslint-disable no-restricted-globals */
const db = require('../connection/database');
const ApiError = require('../errors/ApiError');

class NivelService {
  static async findLevels() {
    const levels = await db.Niveis.findAll();
    if (!levels) throw new ApiError('Internal error', 500);
    return levels;
  }

  static async findLevelById(id) {
    const level = await db.Niveis.findByPk(id);

    if (!level) throw new ApiError('Level not found', 404);

    return level;
  }

  static async createLevel(data) {
    const level = await db.Niveis.create(data);
    if (!level) throw new ApiError('Internal error', 500);
    return level;
  }

  static async updateLevel(data, id) {
    const updatedLevel = await db.Niveis.update(data, {
      where: { id }
    });

    if (!updatedLevel[0]) throw new ApiError('Internal error.', 500);
  }

  static async deleteLevel(id) {
    const deletedLevel = await db.Niveis.destroy({ where: { id } });

    if (!deletedLevel) throw new ApiError('Internal error.', 500);
  }

  static async restoreDeletedLevel(id) {
    if (isNaN(Number(id))) throw new ApiError('The id must be a number.', 422);

    const restoredLevel = await db.Niveis.restore({ where: { id } });

    if (restoredLevel === 0)
      throw new ApiError(`No deleted level with id ${id} was found.`, 404);
    if (!restoredLevel) throw new ApiError('Internal error.', 500);
  }
}

module.exports = NivelService;
