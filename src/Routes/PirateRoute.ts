import { Router } from 'express';
import PirateController from '../Controllers/PirateController';

const pirateRoute = Router();

pirateRoute.post('/', (req, res, next) => new 
PirateController(req, res, next).createOnePirate());
pirateRoute.get('/', (req, res, next) => new 
PirateController(req, res, next).getPirate());
pirateRoute.get('/:id',(req, res, next) => new 
PirateController(req, res, next).getPirateById());
pirateRoute.put('/:id',(req, res, next) => new 
PirateController(req, res, next).updatePirateById());
pirateRoute.delete('/:id',(req, res, next) => new 
PirateController(req, res, next).deletePirateById());

export default pirateRoute;