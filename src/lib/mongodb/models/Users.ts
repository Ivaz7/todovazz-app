import mongoose, { Model, Schema } from 'mongoose';
import type { User } from '@/lib/types';

const UserSchema = new Schema<User>(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
);

// Prevent model overwrite upon hot-reload
const User: Model<User> =
  (mongoose.models.User as Model<User>) ||
  mongoose.model<User>('User', UserSchema);

export default User;
