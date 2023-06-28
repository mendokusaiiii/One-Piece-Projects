import { Schema } from 'mongoose';
import AbstractODM from './AbstractODM';
import ILogin from '../../Interfaces/ILogin';

class LoginODM extends AbstractODM<ILogin> {
  constructor() {
    const schema = new Schema<ILogin>({
      username: { type: String, required: true },
      password: { type: String, required: true },
      email: { type: String, required: true },
    });
    super(schema, 'Login');
  }
}

export default LoginODM;
