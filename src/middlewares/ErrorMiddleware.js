class ErrorMiddleware {
  static catchError(_, res, __, error) {
    const status = error.statusCode || 500;
    const message = status === 500 ? 'Internal error' : error.message;
    return res.status(status).json({ message });
  }
}

module.exports = ErrorMiddleware;
