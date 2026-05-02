/**
 * Global Error Handler Middleware
 *
 * Catches all errors passed via next(error) and returns
 * a consistent JSON error response.
 */
const errorHandler = (err, req, res, _next) => {
  // Default to 500 if status code hasn't been set
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;

  res.status(statusCode).json({
    success: false,
    message: err.message || "Internal Server Error",
    // Show stack trace only in development
    stack: process.env.NODE_ENV === "production" ? undefined : err.stack,
  });
};

/**
 * 404 Not Found Handler
 * Place before the error handler in middleware chain
 */
const notFound = (req, res, next) => {
  const error = new Error(`Not Found - ${req.originalUrl}`);
  res.status(404);
  next(error);
};

module.exports = { errorHandler, notFound };
