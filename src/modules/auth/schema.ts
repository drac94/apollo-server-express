import { gql } from 'apollo-server-express';

const typeDefs = gql`
  extend type Query {
    me: User @isAuthenticated
  }

  extend type Mutation {
    login(email: String!, password: String!): AuthData

    signup(email: String!, password: String!, firstName: String!, lastName: String!): User
  }

  type AuthData {
    user: User
    token: String!
    tokenExpiration: String!
  }

  type User {
    id: ID!
    email: String!
    firstName: String!
    lastName: String!
    created: DateTime!
  }
`;

export default typeDefs;
