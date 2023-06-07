const PessoaService = require('../services/PessoaService');

class PessoaController {
  static async findAll(_, res) {
    const people = await PessoaService.findPeople();

    return res.json(people);
  }

  static async findOne(req, res) {
    const { id } = req.params;

    const person = await PessoaService.findPersonById(id);

    return res.json(person);
  }

  static async create(req, res) {
    const data = req.body;

    await PessoaService.verifyUniqueEmail(data.email);
    const person = await PessoaService.createPerson(data);

    return res.status(201).json(person);
  }

  static async update(req, res) {
    const data = req.body;
    const { id } = req.params;

    await PessoaService.findPersonById(id);
    if (data.email) await PessoaService.verifyUniqueEmail(data.email, id);
    await PessoaService.updatePerson(data, id);

    return res.sendStatus(204);
  }

  static async destroy(req, res) {
    const { id } = req.params;

    await PessoaService.findPersonById(id);
    await PessoaService.deletePerson(id);

    return res.sendStatus(204);
  }
}

module.exports = PessoaController;
