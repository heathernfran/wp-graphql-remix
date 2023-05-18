import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "http://learn-wpgraphql.local/graphql",
  cache: new InMemoryCache(),
});
