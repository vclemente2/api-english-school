const ApiError = require('../errors/ApiError');

class BodyValidation {
  static validate(validationSchema) {
    return async function bodyValidation(req, _, next) {
      try {
        req.body = await validationSchema.validateAsync(req.body);

        next();
      } catch (error) {
        throw new ApiError(error.message, 422);
      }
    };
  }
}

module.exports = BodyValidation;
