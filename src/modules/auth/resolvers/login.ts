import { AuthenticationError } from 'apollo-server-express';
import bcrypt from 'bcrypt';

import config from '../../../config';
import User from '../../../models/user';
import tokenUtil from '../../../utils/token';

type Params = {
  email: string;
  password: string;
};

const login = async (_: any, { email, password }: Params) => {
  const user = await User.findOne({
    email,
  });

  if (!user) {
    throw new AuthenticationError('User not found');
  }

  const isPasswordValid = await bcrypt.compare(password, user.hashedPassword);

  if (!isPasswordValid) {
    throw new AuthenticationError('Incorrect password');
  }

  const token = tokenUtil.create(user.id);

  return {
    user: {
      lastName: user.lastName,
      firstName: user.firstName,
      email: user.email,
      id: user.id,
      created: user.created,
    },
    token,
    tokenExpiration: config.JwtLifeTime,
  };
};

export default login;
