const { gql } = require('apollo-server');

const typeDefs = gql`
  type User {
    id: ID!
    login: String!
    admin: Int!
  },
  input UserInput {
    id: ID
    login: String
    admin: Int
  },
  type Query {
    getUsers: [User]
  },
  type Mutation {
    login(input: UserInput): User,
    createUser(input: UserInput): User,
    updateUser(input: UserInput): User,
    deleteUser(input: UserInput): User
  }
`;

module.exports = typeDefs;
