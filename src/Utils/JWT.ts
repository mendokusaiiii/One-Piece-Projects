import * as dotenv from 'dotenv';
import {
  decode,
  JwtPayload,
  Secret,
  sign,
  SignOptions,
  verify,
} from 'jsonwebtoken';
import CryptoJS from 'crypto-js';
import IJWT from '../Interfaces/IJWT';
import ErrorHandler from './ErrorHandler';
import Variable from '../Env/Variable';

class JWT implements IJWT {
  private _secret: Secret;
  private _config: SignOptions;

  constructor() {
    dotenv.config();

    this._secret = process.env.JWT_SECRET || '';
    this._config = {
      expiresIn: '1d',
      algorithm: 'HS256',
    };
  }

  tokenCreation(payload: JwtPayload): string {
      return sign({ ...payload }, this._secret, this._config);
  }

  tokenValidate(token: string) {
    try {
      verify(token, this._secret);
      const payload = decode(token);
      return payload as JwtPayload;
    } catch (_e) {
      throw new ErrorHandler(401, 'Token must be a valid token');
    }
  }

  public encrypt(password: string): string {
    return CryptoJS.AES.encrypt(password, Variable.PASS_SECRET).toString();
  }

  public decrypt(password: string): string {
    return CryptoJS.AES.decrypt(password, Variable.PASS_SECRET).toString(CryptoJS.enc.Utf8);
  }

  public comparePassword(password: string, decryptedPassword: string): boolean {
    return password === this.decrypt(decryptedPassword);
  }
}

export default JWT;
