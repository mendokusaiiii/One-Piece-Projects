import mongoose from 'mongoose';

import LoginSchema from '../../Schemas/LoginSchema';
import ILogin from '../../Interfaces/ILogin';
import Model from '../../Constants/Model';

const LoginODM = mongoose.model<ILogin>(
  Model.USER_MODEL,
  LoginSchema,
);

export default LoginODM;
