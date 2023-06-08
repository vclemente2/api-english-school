const NivelService = require('../services/NivelService');

class NivelController {
  static async findAll(_, res) {
    const levels = await NivelService.findLevels();

    return res.json(levels);
  }

  static async create(req, res) {
    const data = req.body;

    const level = await NivelService.createLevel(data);

    return res.status(201).json(level);
  }
}

module.exports = NivelController;
