import fetch from "cross-fetch";
import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";

const link = createHttpLink({
  uri: "https://48f7-71-197-175-167.ngrok-free.app/graphql",
  fetch,
});

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link,
});
