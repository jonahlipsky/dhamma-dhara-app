const express = require('express');
const api = express();
const port = process.env.PORT || 4000;
require('dotenv').config()
const cors = require('cors')
const { graphqlHTTP } = require('express-graphql');
const schema = require('./db/graphql_schema');
const root = require('./db/graphql_root');

console.log(process.env.NODE_ENV)

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
