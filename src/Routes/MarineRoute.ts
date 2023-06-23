import { Router } from 'express';
import MarineController from '../Controllers/MarineController';

const marineRoute = Router();

marineRoute.post('/', (req, res, next) => new 
MarineController(req, res, next).createOneMarine());
marineRoute.get('/', (req, res, next) => new 
MarineController(req, res, next).getMarine());
marineRoute.get('/:id',(req, res, next) => new 
MarineController(req, res, next).getMarineById());

export default marineRoute;