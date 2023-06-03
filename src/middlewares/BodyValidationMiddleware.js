class BodyValidation {
  static validate(validationSchema) {
    return async function bodyValidation(req, res, next) {
      try {
        req.body = await validationSchema.validateAsync(req.body);

        return next();
      } catch (error) {
        return res.status(422).json({ message: error.message });
      }
    };
  }
}

module.exports = BodyValidation;
