import { Router } from 'express';
import PirateController from '../Controllers/PirateController';

const pirateRoute = Router();

pirateRoute.post('/', (req, res, next) => new 
PirateController(req, res, next).createOnePirate());

export default pirateRoute;