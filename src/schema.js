const { gql } = require('apollo-server');

const typeDefs = gql`
  type User {
    id: ID!
    username: String!
    admin: Int!
    token: String
    password: String!
  },
  input CreateUserInput {
    admin: Int
    username: String!
    password: String!
  },
  input LoginUserInput {
    username: String!
    password: String!
  }
  input ModifyUserInput {
    id: ID!
    admin: Int
    username: String
  },
  type AuthPayLoad {
    token: String!
  }
  type Query {
    getUsers: [User],
    getUser(input: ID): User
  },
  type Mutation {
    loginUser(input: LoginUserInput): AuthPayLoad!
    signupUser(input: CreateUserInput!): AuthPayLoad!
    createUser(input: CreateUserInput): User
    updateUser(input: ModifyUserInput): User
    deleteUser(input: ID!): User
  }
`;

module.exports = typeDefs;
