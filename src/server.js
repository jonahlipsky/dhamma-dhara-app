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

const context = async ({ req }) => {
  const auth = (req.headers && req.headers.authorization) || '';
  const username = new Buffer(auth, 'base64').toString('ascii');
  const user = await store.prisma.users.findOne({
    where: {
      username
    }
  });
  
  return { user };
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources,
  context,
  instrospection: true,
  playground: true
});

const port = process.env.PORT;

if(process.env.NODE_ENV !== 'test') {
  server.listen({ port }).then(({ url }) => {
    console.log(`App running on port ${port} at url ${url}. Env: ${process.env.NODE_ENV}.`)
  });
}

module.exports = {
  typeDefs,
  resolvers,
  dataSources,
  context,
  ApolloServer,
  UserAPI,
  server,
  store
};
