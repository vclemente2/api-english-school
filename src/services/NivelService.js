const db = require('../connection/database');
const ApiError = require('../errors/ApiError');

class NivelService {
  static async findLevels() {
    const levels = await db.Niveis.findAll();
    if (!levels) throw new ApiError('Internal error', 500);
    return levels;
  }

  static async createLevel(data) {
    const level = await db.Niveis.create(data);
    if (!level) throw new ApiError('Internal error', 500);
    return level;
  }
}

module.exports = NivelService;
