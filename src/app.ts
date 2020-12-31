import { ApolloServer } from 'apollo-server-express';
import express, { Request } from 'express';

import schema from './modules';
import getUser from './utils/context';

const server = new ApolloServer({
  schema,
  context: async ({ req }: { req: Request }) => ({
    user: await getUser(req),
  }),
});

const app = express();

server.applyMiddleware({
  path: '/',
  app,
});

export default app;
