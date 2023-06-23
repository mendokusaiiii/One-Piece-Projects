import { Router } from 'express';
import marineRoute from './MarineRoute';
import pirateRoute from './PirateRoute';

const routes = Router();

routes.use('/pirates', pirateRoute);
routes.use('/marines', marineRoute)

export default routes;