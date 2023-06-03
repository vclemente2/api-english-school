const PessoaService = require('../services/PessoaService');

class PessoaController {
  static async findAll(_, res) {
    try {
      const people = await PessoaService.findPeople();

      return res.json(people);
    } catch (error) {
      return res
        .status(error.statusCode || 500)
        .json({ message: error.message });
    }
  }

  static async findOne(req, res) {
    const { id } = req.params;
    try {
      const person = await PessoaService.findPersonById(id);

      return res.json(person);
    } catch (error) {
      return res
        .status(error.statusCode || 500)
        .json({ message: error.message });
    }
  }

  static async create(req, res) {
    const data = req.body;

    try {
      await PessoaService.verifyUniqueEmail(data.email);
      const person = await PessoaService.createPerson(data);

      return res.status(201).json(person);
    } catch (error) {
      return res
        .status(error.statusCode || 500)
        .json({ message: error.message });
    }
  }
}

module.exports = PessoaController;
