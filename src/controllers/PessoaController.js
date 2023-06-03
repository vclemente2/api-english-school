const db = require('../connection/database');

class PessoaController {
  static async findAll(req, res) {
    try {
      const people = await db.Pessoas.findAll();
      return res.json(people);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: 'Internal error.' });
    }
  }

  static async create(req, res) {
    const data = req.body;

    try {
      return res.json(data);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: 'Internal error.' });
    }
  }
}

module.exports = PessoaController;
