import { NextFunction, Request, Response } from 'express';
import ErrorHandler from '../Utils/ErrorHandler';

class MiddlewareError {
  public static handle(
    error: Error,
    _req: Request,
    res: Response,
    next: NextFunction,
  ) {
    const { status, message } =  error as ErrorHandler;
    res.status(status || 500).json({ message });
    next();
  }
}

export default MiddlewareError;
