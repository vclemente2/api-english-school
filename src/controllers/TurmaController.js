const TurmaService = require('../services/TurmaService');

class TurmaController {
  static async findAll(_, res) {
    const classes = await TurmaService.findClasses();

    return res.json(classes);
  }

  static async findOne(req, res) {
    const { id } = req.params;

    const classAt = await TurmaService.findClassById(id);

    return res.json(classAt);
  }

  static async create(req, res) {
    const data = req.body;

    const classAt = await TurmaService.createClass(data);

    return res.status(201).json(classAt);
  }

  static async update(req, res) {
    const data = req.body;
    const { id } = req.params;

    await TurmaService.findClassById(id);
    await TurmaService.updateClass(data, id);

    return res.sendStatus(204);
  }

  static async destroy(req, res) {
    const { id } = req.params;

    await TurmaService.findClassById(id);
    await TurmaService.deleteClass(id);

    return res.sendStatus(204);
  }
}

module.exports = TurmaController;
