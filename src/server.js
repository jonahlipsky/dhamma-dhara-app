require('dotenv').config()
const { ApolloServer } = require('apollo-server')

const typeDefs = require('./schema');
const resolvers = require('./resolvers');
const UserAPI = require('./datasources/user');
const { createStore } = require('./utils');
const store = createStore();
const dataSources = () => ({
  userAPI: new UserAPI({ store })
});

const port = process.env.PORT;

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources
});

if(process.env.NODE_ENV !== 'test') {
  server.listen({ port }).then(({ url }) => {
    console.log(`App running on port ${port} at url ${url}. Env: ${process.env.NODE_ENV}.`)
  });
}

module.exports = {
  typeDefs,
  resolvers,
  dataSources,
  instrospection: true,
  playground: true
};
