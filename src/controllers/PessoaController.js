const PessoaService = require('../services/PessoaService');

class PessoaController {
  static async findAllActive(_, res) {
    const people = await PessoaService.findAllActivePeople();

    return res.json(people);
  }

  static async findAll(_, res) {
    const people = await PessoaService.findAllPeople();

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

  static async restore(req, res) {
    const { id } = req.params;

    await PessoaService.restoreDeletedPerson(id);

    return res
      .status(201)
      .json({ message: `The person with id ${id} was restored.` });
  }

  static async createEnroll(req, res) {
    const { personId } = req.params;
    const data = req.body;

    const enroll = await PessoaService.createEnroll(data, Number(personId));

    return res.status(201).json(enroll);
  }

  static async findAllEnrollments(_, res) {
    const enrollments = await PessoaService.findEnrollments();

    return res.json(enrollments);
  }

  static async findOneEnroll(req, res) {
    const { enrollId, personId } = req.params;

    const enroll = await PessoaService.findEnrollById(enrollId, personId);

    return res.json(enroll);
  }

  static async findPersonActiveEnrollments(req, res) {
    const { personId } = req.params;

    const activeEnrollments = await PessoaService.findPersonActiveEnrollments(
      personId
    );

    return res.json(activeEnrollments);
  }

  static async findAndCountEnrollmetsByClass(req, res) {
    const { classId } = req.params;

    const enrollments = await PessoaService.findAndCountEnrollmetsByClass(
      classId
    );

    return res.json(enrollments);
  }

  static async findCrowdedClasses(req, res) {
    const { max } = req.query;

    const crowdedClasses = await PessoaService.findCrowdedClasses(max);

    return res.json(crowdedClasses);
  }

  static async updateEnroll(req, res) {
    const data = req.body;
    const { enrollId, personId } = req.params;

    await PessoaService.findEnrollById(enrollId, personId);
    await PessoaService.updateEnroll(data, enrollId, personId);

    return res.sendStatus(204);
  }

  static async destroyEnroll(req, res) {
    const { enrollId, personId } = req.params;

    await PessoaService.findEnrollById(enrollId, personId);
    await PessoaService.deleteEnroll(enrollId, personId);

    return res.sendStatus(204);
  }

  static async restoreEnroll(req, res) {
    const { enrollId, personId } = req.params;

    await PessoaService.restoreDeletedEnroll(enrollId, personId);

    return res
      .status(201)
      .json({ message: `The enroll with id ${enrollId} was restored.` });
  }
}

module.exports = PessoaController;
