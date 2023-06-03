const db = require('../connection/database');
const ApiError = require('../errors/ApiError');

class PessoaService {
  static async findPeople() {
    return db.Pessoas.findAll();
  }

  static async findPersonById(id) {
    const person = await db.Pessoas.findByPk(id);

    if (!person) throw new ApiError('User not found', 404);

    return person;
  }

  static async verifyUniqueEmail(email) {
    const emailExists = await db.Pessoas.findOne({ where: { email } });

    if (emailExists) throw new ApiError('Email alredy registered.', 409);
  }

  static async createPerson(data) {
    const person = await db.Pessoas.create(data);

    if (!person) throw new ApiError('Internal error.', 500);

    return person;
  }
}

module.exports = PessoaService;
