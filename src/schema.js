const { gql } = require('apollo-server');

const typeDefs = gql`
  type User {
    id: ID!
    username: String!
    admin: Int!
    token: String
  },
  input UserInput {
    id: ID
    admin: Int
    username: String
  },
  type Query {
    getUsers: [User]
  },
  type Mutation {
    loginUser(input: String): User,
    createUser(input: UserInput): User,
    updateUser(input: UserInput): User,
    deleteUser(input: UserInput): User
  }
`;

module.exports = typeDefs;
