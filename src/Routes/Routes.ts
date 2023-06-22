import { Router } from 'express';
import pirateRoute from './PirateRoute';

const routes = Router();

routes.use('/pirates', pirateRoute);

export default routes;