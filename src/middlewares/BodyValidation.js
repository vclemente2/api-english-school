class BodyValidation {
  static validate(validationSchema) {
    return async function (req, res, next) {
      try {
        req.body = await validationSchema.validateAsync(req.body);

        next();
      } catch (error) {
        console.log(error);
        return res.status(422).json({ message: error.message });
      }
    };
  }
}

module.exports = BodyValidation;
