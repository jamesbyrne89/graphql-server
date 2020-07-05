import { ApolloServer } from "apollo-server";
import schema from "./types/schema";
import resolvers from "./types/resolvers";

export const start = () => {
  const server = new ApolloServer({
    typeDefs: schema,
    resolvers,
    introspection: true,
    playground: true,
  });

  server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
  });
};
