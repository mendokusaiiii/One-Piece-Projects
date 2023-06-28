import { JwtPayload } from 'jsonwebtoken';

export default interface IJWT {
    tokenCreation(payload: JwtPayload): string;
    tokenValidate(token: string): JwtPayload;
  }