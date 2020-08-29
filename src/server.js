require('dotenv').config()
const { ApolloServer } = require('apollo-server')

// const express = require('express');
// const api = express();
const port = process.env.PORT || 4000;

// const cors = require('cors')
// const { graphqlHTTP } = require('express-graphql');
const typeDefs = require('./schema.js');
const resolvers = require('./graphql_root');

console.log(process.env.NODE_ENV)

// api.use(cors())
// api.use(
//   '/graphql',
//   graphqlHTTP({
//     schema: schema,
//     rootValue: root,
//     graphiql: true,
//   }),
// );

// api.listen(port, () => console.log(`Listening on port ${port}`));

const server = new ApolloServer({
  typeDefs,
  resolvers
})

if(process.env.NODE_ENV !== 'test') {
  server.listen({ port }).then(({ url }) => {
    console.log(`App running on port ${port} at url ${url}. Env: ${process.env.NODE_ENV}.`)
  })
}



// export for integration & end to end tests
module.exports = {
  typeDefs,
  resolvers
}
