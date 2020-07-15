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
    login: String
  },
  type Query {
    hello: String
    getUsers: [User]
  },
  type Mutation {
    createUser(input: UserInput): User
  }
`);

const root = {
  hello: () => {
    return 'Hello World!';
  },
  getUsers: async () => {
    console.log('getting users')
    let users = await getAllUsers()
    return users
  },
  createUser: async ({input}) => {
    console.log('creating user')
    let newUser = await createUser(input)
    return newUser
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

async function getAllUsers () {
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

// api.get('/', (req, res) => res.send('hello world'));

// api.get('/users', (req, routeRes) => {
//   response = await getAllusers()
//   routeRes.send(response)
// })

api.listen(port, () => console.log(`Listening on port ${port}`));
