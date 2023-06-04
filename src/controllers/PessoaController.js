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
}

module.exports = PessoaController;
