import { fetch } from "cross-fetch";
import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";

const link = createHttpLink({
  uri: "http://learn-wpgraphql.local/graphql",
  fetch,
});

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link,
});
