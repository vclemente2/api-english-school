const db = require('../connection/database');
const ApiError = require('../errors/ApiError');

class PessoaService {
  static async findPeople() {
    return db.Pessoas.findAll();
  }

  static async findPersonById(id) {
    const person = await db.Pessoas.findOne({
      where: { id },
      include: 'turmas'
    });

    if (!person) throw new ApiError('Person not found', 404);

    return person;
  }

  static async verifyUniqueEmail(email, id = 0) {
    const emailExists = await db.Pessoas.findOne({ where: { email } });

    if (id) {
      if (emailExists && emailExists.id !== Number(id)) {
        throw new ApiError('Email already registered to another person.', 409);
      }
    } else if (emailExists) {
      throw new ApiError('Email already registered.', 409);
    }
  }

  static async createPerson(data) {
    const person = await db.Pessoas.create(data);

    if (!person) throw new ApiError('Internal error.', 500);

    return person;
  }

  static async updatePerson(data, id) {
    const updatedPerson = await db.Pessoas.update(data, {
      where: { id }
    });

    if (!updatedPerson[0]) throw new ApiError('Internal error.', 500);
  }

  static async deletePerson(id) {
    const deletedPerson = await db.Pessoas.destroy({ where: { id } });

    if (!deletedPerson) throw new ApiError('Internal error.', 500);
  }
}

module.exports = PessoaService;
