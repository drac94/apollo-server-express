import { UserInputError } from 'apollo-server-express';
import bcrypt from 'bcrypt';

import User from '../../../models/user';

const SALT_ROUNDS = 12;

type Params = {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
};

const signup = async (_: any, { email, password, firstName, lastName }: Params) => {
  try {
    const existingUser = await User.findOne({
      email,
    });

    if (existingUser) {
      throw new UserInputError('User already exists');
    }

    const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);

    const user = await User.create({
      email,
      hashedPassword,
      firstName,
      lastName,
    });

    return {
      lastName: user.lastName,
      firstName: user.firstName,
      email: user.email,
      created: user.created,
      id: user.id,
      hashedPassword: null,
    };
  } catch (error) {
    throw new Error(error);
  }
};

export default signup;
