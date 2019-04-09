import express from 'express';
import { ApolloServer } from 'apollo-server-express';

import typeDefs from './schema';
import resolvers from './resolvers';

const app = express();

const graphqlEndpoint = '/graphql';

const server = new ApolloServer({ typeDefs, resolvers });
server.applyMiddleware({ app });

app.listen(8081, () => {
  console.log('Server is running');
});
