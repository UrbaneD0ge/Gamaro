import React from "react";
import Homepage from "./pages/Homepage";
import "./index.css";
import {
  ApolloClient,
  InMemoryCache,
  createHttpLink,
  ApolloProvider,
} from "@apollo/client";
import { StoreProvider } from "./utils/globalState";
import { setContext } from "@apollo/client/link/context";
//Apollo Client stuff
const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

const App = () => (
  <ApolloProvider client={client}>
    <div>
      <StoreProvider>
        <Homepage />;
      </StoreProvider>
    </div>
  </ApolloProvider>
);

export default App;
