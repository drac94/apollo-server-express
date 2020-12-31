import { IResolvers } from 'apollo-server-express';

import login from './login';
import me from './me';
import signup from './signup';

const resolvers: IResolvers = {
  Query: {
    me,
  },
  Mutation: {
    login,
    signup,
  },
};

export default resolvers;
