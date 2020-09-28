import { Request, Response } from 'express';

export const notFoundError = (req: Request, res: Response, next: CallableFunction) => {
  const error = new Error(`Not Found - ${req.originalUrl}`);
  res.status(404);
  next(error);
};

export const errorHandler = (error: Error, req: Request, res: Response, next: CallableFunction) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode);
  res.json({
    error: error.message,
    ...(process.env.NODE_ENV === 'development' && { stackTrace: error.stack })
  });
};

module.exports = {
  notFoundError,
  errorHandler,
}