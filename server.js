const express = require('express');
const api = express();
const port = process.env.PORT || 4000;
require('dotenv').config()
const { Client } = require('pg');
const cors = require('cors')
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');
const schema = buildSchema(`
  type User {
    id: ID!
    login: String!
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
    let users = await getUsers()
    return users
  },
  createUser: async ({input}) => {
    console.log('creating user')
    let newUser = await createUser(input)
    return newUser
  },
  updateUser: async ({input}) => {
    console.log('updating user')
    let updatedUser = await updateUser(input)
    return updatedUser
  },
  deleteUser: async ({input}) => {
    console.log('deleting user')
    let deletedUser = await deleteUser(input)
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

async function getUsers () {
  let client = new Client({ database: process.env.POSTGRES_NAME});
  client.connect()
  let data = await client.query('SELECT * FROM users')
  return data.rows
}

async function createUser (input) {
  let client = new Client({ database: process.env.POSTGRES_NAME});
  client.connect();
  let data = await client.query('INSERT INTO users(login) VALUES($1) RETURNING *', [input.login])
  return data.rows[0]
}

async function updateUser (input) {
  let client = new Client({ database: process.env.POSTGRES_NAME});
  client.connect();
  console.log(input)
  let data = await client.query('UPDATE users SET login = $1 WHERE id = $2 RETURNING *', [input.login, input.id])
  return data.rows[0]
}

async function deleteUser (input) {
  let client = new Client({ database: process.env.POSTGRES_NAME});
  client.connect();
  console.log(input)
  let data = await client.query('DELETE FROM users WHERE id = $1 RETURNING *', [input.id])
  return data.rows[0]  
}

api.listen(port, () => console.log(`Listening on port ${port}`));
