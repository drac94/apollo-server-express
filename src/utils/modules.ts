import { gql, makeExecutableSchema, IResolvers } from 'apollo-server-express';
import deepmerge from 'deepmerge';
import { DocumentNode } from 'graphql';

import directives from '../directives';
import scalars from '../scalars';

type Module = {
  typeDefs: DocumentNode[];
  resolvers: IResolvers;
};

const globalTypeDefs = gql`
  type Query
  type Mutation
`;

const makeExecutableSchemaFromModules = ({ modules }: { modules: Module[] }) => {
  let typeDefs = [globalTypeDefs, ...scalars.typeDefs, ...directives.typeDefs];

  let resolvers: IResolvers = {
    ...scalars.resolvers,
  };

  modules.forEach((module: Module) => {
    typeDefs = [...typeDefs, ...module.typeDefs];

    resolvers = deepmerge(resolvers, module.resolvers);
  });

  return makeExecutableSchema({
    typeDefs,
    resolvers,
    schemaDirectives: {
      ...directives.schemaDirectives,
    },
  });
};

export default makeExecutableSchemaFromModules;
