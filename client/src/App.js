import React from "react";
import Homepage from "./pages/Homepage";
import "./index.css";
import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";


const httpLink = createHttpLink({
    uri: '/graphql',
  });
  
  const authLink = setContext((_, { headers }) => {
    const token = localStorage.getItem('id_token');
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : '',
      },
    };
  });
  
const client = newA ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache
})

const App = () => (
  <ApolloClient client={client}>
    <Homepage />;
  </ApolloClient>
);

export default App;
