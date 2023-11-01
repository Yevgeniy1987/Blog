import { HttpLink, InMemoryCache } from "@apollo/client";
import {
  NextSSRApolloClient,
} from "@apollo/experimental-nextjs-app-support/ssr";
import { registerApolloClient } from "@apollo/experimental-nextjs-app-support/rsc";

export const { getClient } = registerApolloClient(() => {
  return new NextSSRApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
      // uri: "https://countries.trevorblades.com/graphql",
      uri: "http://localhost:4444/api/graphql",
      fetchOptions: { cache: "no-store" },
    }),
  });
});

export const apolloClient = getClient();