import login from './login';
import me from './me';
import signup from './signup';

const resolvers = {
  Query: {
    me,
  },
  Mutation: {
    login,
    signup,
  },
};

export default resolvers;
