import Joi from 'joi';
import Regex from '../Constants/Regex';

class UserValidation {
  public register = Joi.object({
    username: Joi.string().max(30).required(),
    name: Joi.string().max(30).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).max(30).required(),
  });

  public login = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(6).max(30).required(),
  });

  public updateUsername = Joi.object({
    username: Joi.string().max(30).required(),
    password: Joi.string().min(6).max(30).required(),
  });

  public updateEmail = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(6).max(30).required(),
  });

  public updatePassword = Joi.object({
    oldPassword: Joi.string().min(6).max(30).required(),
    newPassword: Joi.string().min(6).max(30).required(),
    confirmPassword: Joi.string().min(6).max(30).required(),
  });

  public deleteUser = Joi.object({
    password: Joi.string().min(6).max(30).required(),
  });

  public validateUsername(username: string): boolean {
    return Regex.USERNAME.test(username);
  }

  public validateName(name: string): boolean {
    return Regex.NAME.test(name);
  }

  public validateEmail(email: string): boolean {
    return Regex.EMAIL.test(email);
  }

  public validatePassword(password: string): boolean {
    return Regex.PASSWORD.test(password);
  }
}

export default UserValidation;
