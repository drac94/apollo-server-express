import { gql, SchemaDirectiveVisitor, AuthenticationError } from 'apollo-server-express';
import { defaultFieldResolver, GraphQLField } from 'graphql';

const typeDef = gql`
  directive @isAuthenticated on FIELD_DEFINITION
`;

class IsAuthenticatedDirective extends SchemaDirectiveVisitor {
  // eslint-disable-next-line class-methods-use-this
  visitFieldDefinition(field: GraphQLField<any, any>) {
    const { resolve = defaultFieldResolver } = field;

    // eslint-disable-next-line no-param-reassign
    field.resolve = async (...args) => {
      const context = args[2];

      if (!context || !context.user) {
        throw new AuthenticationError('Not allowed');
      }

      return resolve.apply(this, args);
    };
  }
}

export default {
  typeDef,
  directive: IsAuthenticatedDirective,
};
