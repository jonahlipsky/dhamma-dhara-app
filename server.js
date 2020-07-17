const express = require('express');
const api = express();
const port = process.env.PORT || 4000;
require('dotenv').config()
const { Client } = require('pg');
const cors = require('cors')
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');
const userQueries = require('./db/queries/userQueries')
const schema = buildSchema(`
  type User {
    id: ID!
    login: String!
    admin: Int!
  },
  input UserInput {
    id: ID
    login: String
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

const root = {
  hello: () => {
    return 'Hello World!';
  },
  getUsers: async () => {
    console.log('getting users')
    let users = await userQueries.getUsers()
    return users
  },
  createUser: async ({input}) => {
    console.log('creating user')
    let newUser = await userQueries.createUser(input)
    return newUser
  },
  updateUser: async ({input}) => {
    console.log('updating user')
    let updatedUser = await userQueries.updateUser(input)
    return updatedUser
  },
  deleteUser: async ({input}) => {
    console.log('deleting user')
    let deletedUser = await userQueries.deleteUser(input)
    return deletedUser
  }
};

api.use(cors())
api.use(
  '/graphql',
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  }),
);

api.listen(port, () => console.log(`Listening on port ${port}`));
