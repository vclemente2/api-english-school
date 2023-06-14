/* eslint-disable no-restricted-globals */
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

  static async restoreDeletedPerson(id) {
    if (isNaN(Number(id))) throw new ApiError('The id must be a number.', 422);

    const restoredPerson = await db.Pessoas.restore({ where: { id } });

    if (restoredPerson === 0)
      throw new ApiError(`No deleted person with id ${id} was found.`, 404);
    if (!restoredPerson) throw new ApiError('Internal error.', 500);
  }

  static async createEnroll(data, personId) {
    await this.findPersonById(personId);
    const enroll = await db.Matriculas.create({
      ...data,
      estudante_id: personId
    });

    if (!enroll) throw new ApiError('Internal error.', 500);

    return enroll;
  }

  static async findEnrollments() {
    return db.Matriculas.findAll({ include: 'estudante' });
  }

  static async findEnrollById(enrollId, personId) {
    const enroll = await db.Matriculas.findOne({
      where: { id: enrollId, estudante_id: personId },
      include: ['estudante', 'turma']
    });

    if (!enroll) throw new ApiError('Enroll not found', 404);

    return enroll;
  }

  static async updateEnroll(data, enrollId, personId) {
    const updatedEnroll = await db.Matriculas.update(data, {
      where: {
        id: enrollId,
        estudante_id: personId
      }
    });

    if (!updatedEnroll[0]) throw new ApiError('Internal error.', 500);
  }

  static async deleteEnroll(enrollId, personId) {
    const deletedEnroll = await db.Matriculas.destroy({
      where: { id: enrollId, estudante_id: personId }
    });

    if (!deletedEnroll) throw new ApiError('Internal error.', 500);
  }

  static async restoreDeletedEnroll(enrollId, personId) {
    if (isNaN(Number(enrollId)) || isNaN(Number(personId)))
      throw new ApiError('The id must be a number.', 422);

    const restoredEnroll = await db.Matriculas.restore({
      where: { id: enrollId, estudante_id: personId }
    });

    if (restoredEnroll === 0)
      throw new ApiError(
        `No deleted enroll with id ${enrollId} was found for this person.`,
        404
      );
    if (!restoredEnroll) throw new ApiError('Internal error.', 500);
  }
}

module.exports = PessoaService;
