const express = require('express');
const session = require('express-session');
const app = express();
import { PORT, NODE_ENV, SESSION_SECRET } from './config';
require('dotenv').config();
const cors = require('cors');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./db/graphql_schema');
const root = require('./db/graphql_root');

console.log(NODE_ENV);

// app.disable('x-powered-by');
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
// app.use(cors())

app.use(session({ secret: SESSION_SECRET, cookie: { maxAge: 60000 } }));

app.use(
  '/graphql',
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  }),
);

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
