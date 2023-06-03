const PessoaService = require('../services/PessoaService');

class PessoaController {
  static async findAll(_, res) {
    try {
      const people = await PessoaService.findPeople();

      return res.json(people);
    } catch (error) {
      console.log(error);
      return res.status(400).json({ message: error.message });
    }
  }

  static async create(req, res) {
    const data = req.body;

    try {
      await PessoaService.verifyUniqueEmail(data.email);
      const person = await PessoaService.createPerson(data);

      return res.status(201).json(person);
    } catch (error) {
      console.log(error);
      return res.status(400).json({ message: error.message });
    }
  }
}

module.exports = PessoaController;
