import express from 'express';
import routes from './Routes/Routes';
import MiddlewareError from './Middlewares/MiddlewareError';

const app = express();
app.use(express.json());
app.use(routes);

app.use(MiddlewareError.handle);

export default app;
