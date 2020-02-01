import { ApolloServer } from "apollo-server";

import resolvers from "./resolvers";
import typeDefs from "./type-defs";

const { SERVER_PORT = 4000 } = process.env;

const server = new ApolloServer({ resolvers, typeDefs });

server
  .listen(SERVER_PORT)
  .then(({ url }) => console.log(`Server ready at ${url}. `));
