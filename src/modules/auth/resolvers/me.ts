import { IUser } from '../../../models/user';

type Context = {
  user: IUser;
};

const me = async (_parent: any, _args: any, context: Context) => {
  const { user } = context;
  return {
    lastName: user.lastName,
    firstName: user.firstName,
    email: user.email,
    id: user.id,
    created: user.created,
  };
};

export default me;
