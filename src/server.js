require('dotenv').config()
const { ApolloServer } = require('apollo-server')

const typeDefs = require('./schema');
const resolvers = require('./resolvers');
const UserAPI = require('./datasources/user');
const dataSources = () => ({
  userAPI: new UserAPI()
});

const port = process.env.PORT;


const server = new ApolloServer({
  typeDefs,
  resolvers
});

if(process.env.NODE_ENV !== 'test') {
  server.listen({ port }).then(({ url }) => {
    console.log(`App running on port ${port} at url ${url}. Env: ${process.env.NODE_ENV}.`)
  });
}

module.exports = {
  typeDefs,
  resolvers,
  instrospection: true,
  playground: true
};
