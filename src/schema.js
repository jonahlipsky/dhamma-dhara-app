const { gql } = require('apollo-server');

const typeDefs = gql`
  type User {
    id: ID!
    username: String!
    admin: Int!
    token: String
  },
  input CreateUserInput {
    admin: Int
    username: String
  },
  input ModifyUserInput {
    id: ID!
    admin: Int
    username: String
  },
  type Query {
    getUsers: [User],
    getUser(input: ID): User
  },
  type Mutation {
    loginUser(input: String): User,
    createUser(input: CreateUserInput): User,
    updateUser(input: ModifyUserInput): User,
    deleteUser(input: ModifyUserInput): User
  }
`;

module.exports = typeDefs;
