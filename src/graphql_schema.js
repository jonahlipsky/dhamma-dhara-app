const { buildSchema } = require('graphql');

module.exports = buildSchema(`
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
    hello: String
    getUsers: [User]
  },
  type Mutation {
    createUser(input: UserInput): User,
    updateUser(input: UserInput): User,
    deleteUser(input: UserInput): User
  }
`);

