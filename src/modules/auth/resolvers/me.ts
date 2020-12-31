import { IUser } from '../../../models/user';

const me = async (_: any, args: any, { user }: { user: IUser }) => ({
  lastName: user.lastName,
  firstName: user.firstName,
  email: user.email,
  id: user.id,
  created: user.created,
});

export default me;
