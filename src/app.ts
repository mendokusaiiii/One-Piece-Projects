import express from 'express';
import routes from './Routes/Routes';
// import Errors from './Middlewares/Error';

const app = express();
app.use(express.json());
app.use(routes);

// app.use(Errors.handle);

export default app;
