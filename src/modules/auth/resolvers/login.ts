import { AuthenticationError } from 'apollo-server-express';
import bcrypt from 'bcrypt';

import config from '../../../config';
import User from '../../../models/user';
import tokenUtil from '../../../utils/token';

type Args = {
  email: string;
  password: string;
};

const login = async (_parent: any, args: Args) => {
  const { email, password } = args;
  const user = await User.findOne({
    email,
  });

  if (!user) {
    throw new AuthenticationError('The username or password you entered is incorrect');
  }

  const isPasswordValid = await bcrypt.compare(password, user.hashedPassword);

  if (!isPasswordValid) {
    throw new AuthenticationError('The username or password you entered is incorrect');
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
