class BodyValidation {
  static validate(validationSchema) {
    return async function bodyValidation(req, _, next) {
      req.body = await validationSchema.validateAsync(req.body);

      return next();
    };
  }
}

module.exports = BodyValidation;
