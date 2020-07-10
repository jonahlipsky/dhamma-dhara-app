const express = require('express');
const api = express();
const port = process.env.PORT || 4000;
require('dotenv').config()
const { Client } = require('pg');
const client = new Client({
  connectionString: process.env.DATABASE_URL,
});
const cors = require('cors')
const { graphqlHTTP } = require('express-graphql');
const { graphql, buildSchema } = require('graphql');
const schema = buildSchema(`
  type Query {
    hello: String
    todos: [Todo]
  },
  type Todo {
    name: String!
  }
`);

const root = {
  hello: () => {
    return 'Hello World!';
  },
  todos: () => {
    return [{name: "hello"}, {name:"world"}]
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
  let client2 = new Client({ database: process.env.POSTGRES_NAME});
  client2.connect()
  let response;
  client2.query('SELECT * FROM todos', async (err, res) => {
    if (err) {
      console.log('Failed to query todos')
      routeRes.send('Failure')
    } else {
      console.log(res.rows[0])
      console.log(res.rows)
      response = res.rows
      console.log('sending response')
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
