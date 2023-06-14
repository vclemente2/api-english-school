/* eslint-disable no-restricted-globals */
const db = require('../connection/database');
const ApiError = require('../errors/ApiError');

class TurmaService {
  static async findClasses() {
    return db.Turmas.findAll();
  }

  static async findClassById(id) {
    const classAt = await db.Turmas.findOne({
      where: { id },
      include: ['matricula', 'docente', 'nivel']
    });

    if (!classAt) throw new ApiError('Class not found', 404);

    return classAt;
  }

  static async createClass(data) {
    const classAt = await db.Turmas.create(data);

    if (!classAt) throw new ApiError('Internal error.', 500);

    return classAt;
  }

  static async updateClass(data, id) {
    const updatedClass = await db.Turmas.update(data, {
      where: { id }
    });

    if (!updatedClass[0]) throw new ApiError('Internal error.', 500);
  }

  static async deleteClass(id) {
    const deletedClass = await db.Turmas.destroy({ where: { id } });

    if (!deletedClass) throw new ApiError('Internal error.', 500);
  }

  static async restoreDeletedClass(id) {
    if (isNaN(Number(id))) throw new ApiError('The id must be a number.', 422);

    const restoredClass = await db.Turmas.restore({ where: { id } });

    if (restoredClass === 0)
      throw new ApiError(`No deleted class with id ${id} was found.`, 404);
    if (!restoredClass) throw new ApiError('Internal error.', 500);
  }
}

module.exports = TurmaService;
