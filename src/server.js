require('dotenv').config()
const { ApolloServer } = require('apollo-server')


const typeDefs = require('./schema.js');
const resolvers = require('./resolvers');
import { PORT, NODE_ENV } from './config';
const port = process.env.PORT || PORT;

const server = new ApolloServer({
  typeDefs,
  resolvers
});

if(process.env.NODE_ENV !== 'test') {
  server.listen({ port }).then(({ url }) => {
    console.log(`App running on port ${port} at url ${url}. Env: ${process.env.NODE_ENV || NODE_ENV}.`)
  });
}

module.exports = {
  typeDefs,
  resolvers,
  instrospection: true,
  playground: true
};
