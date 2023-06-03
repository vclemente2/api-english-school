const db = require('../connection/database');

class PessoaService {
  static async findPeople() {
    return db.Pessoas.findAll();
  }

  static async verifyUniqueEmail(email) {
    const emailExists = await db.Pessoas.findOne({ where: { email } });

    if (emailExists) throw new Error('Email alredy registered.');
  }

  static async createPerson(data) {
    const person = await db.Pessoas.create(data);

    if (!person) throw new Error('Internal error.');

    return person;
  }
}

module.exports = PessoaService;
