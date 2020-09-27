require('dotenv').config()
const { ApolloServer } = require('apollo-server')

const typeDefs = require('./schema');
const resolvers = require('./resolvers');
const UserAPI = require('./datasources/user');
const { createStore } = require('./utils');
const store = createStore();
const userAPI = new UserAPI({ store })
const dataSources = () => ({
  userAPI
});
const jwt = require('jsonwebtoken');

const context = async ({ req }) => {
  const auth = (req.headers && req.headers.authorization) || '';

  let token;
  let decoded;

  if (auth !== '') {
    token = auth.replace('Bearer ', '');
    decoded = jwt.verify(token, process.env.SECRET_TOKEN);
  }

  if ( !decoded ) {
    return { user: null};
  } else {
    const user = await userAPI.getUserBySessionToken({ sessionToken: decoded });
    return { user };
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources,
  context,
  instrospection: true,
  playground: true
});

const port = process.env.PORT || 4000;

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
