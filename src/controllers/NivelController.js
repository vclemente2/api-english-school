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

  static async update(req, res) {
    const data = req.body;
    const { id } = req.params;

    await NivelService.findLevelById(id);
    await NivelService.updateLevel(data, id);

    return res.sendStatus(204);
  }

  static async destroy(req, res) {
    const { id } = req.params;

    await NivelService.findLevelById(id);
    await NivelService.deleteLevel(id);

    return res.sendStatus(204);
  }
}

module.exports = NivelController;
