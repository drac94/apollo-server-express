import mongoose from 'mongoose';

export type IUser = {
  firstName: string;
  lastName: string;
  email: string;
  hashedPassword: string;
  created?: string;
  changed?: string;
  lastActive?: string;
} & mongoose.Document;

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  hashedPassword: {
    type: String,
    required: true,
  },
  created: {
    type: Date,
    default: Date.now,
  },
  changed: {
    type: Date,
    default: Date.now,
  },
  lastActive: {
    type: Date,
  },
});

const User = mongoose.model<IUser>('User', userSchema);

export default User;
