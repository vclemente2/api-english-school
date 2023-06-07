/* eslint-disable no-unused-vars */
class ErrorMiddleware {
  static catchError(error, req, res, _) {
    const status = error.statusCode || 500;
    const message = status === 500 ? 'Internal error' : error.message;
    console.log(error);
    return res.status(status).json({ message });
  }
}

module.exports = ErrorMiddleware;
