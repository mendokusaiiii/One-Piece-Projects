import mongoose from 'mongoose';
import Number from '../Constants/Number';

const LoginSchema = new mongoose.Schema(
    {
      username: {
        type: String,
        required: true,
        unique: true,
        min: Number.USERNAME_MIN_LENGTH,
        max: Number.USERNAME_MAX_LENGTH,
      },
      name: {
        type: String,
        required: true,
        min: Number.NAME_MIN_LENGTH,
        max: Number.NAME_MAX_LENGTH,
      },
      email: {
        type: String,
        required: true,
        unique: true,
        max: Number.EMAIL_MAX_LENGTH,
      },
      password: {
        type: String,
        required: true,
        min: Number.PASSWORD_MIN_LENGTH,
      },
      isAdmin: {
        type: Boolean,
        default: true,
      },
    },
    {
      versionKey: false,
      timestamps: true,
    },
  )
  
  export default LoginSchema;