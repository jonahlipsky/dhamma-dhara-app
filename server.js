const express = require('express');
const api = express();
const port = process.env.PORT || 4000;
require('dotenv').config()
const { Client } = require('pg');
const cors = require('cors')
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');
const schema = buildSchema(`
  type Todo {
    id: ID!
    name: String!
  },
  input TodoInput {
    name: String
  },
  type Query {
    hello: String
    getTodos: [Todo]
  }
`);

class Todo {
  constructor(id, { name }){
    this.id = id;
    this.name = name
  }
}

const root = {
  hello: () => {
    return 'Hello World!';
  },
  getTodos: async () => {
    console.log('getting todos')
    let todos = await getAllTodos()
    console.log(todos)
    return todos
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

async function getAllTodos () {
  let client = new Client({ database: process.env.POSTGRES_NAME});
  client.connect()
  let response;
  await client.query('SELECT * FROM todos', (err, res) => {
    if (err) {
      console.log('Failed to query todos')
    } else {
      console.log('Querying for todos')
      console.log(res.rows)
      response = res.rows
      client.end()
      return response
    }
  })
}

// api.get('/', (req, res) => res.send('hello world'));

// api.get('/todos', (req, routeRes) => {
//   response = await getAllTodos()
//   routeRes.send(response)
// })

api.listen(port, () => console.log(`Listening on port ${port}`));
