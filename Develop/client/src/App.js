import React from "react";
import Plant from "./pages/Plant";
import Home from "./pages/Home";
import Signup from "./pages/CreateAccount";
import MyGarden from "./pages/MyGarden";
import Search from "./components/Search/index";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Uncomment import statement below after building queries and mutations
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const httpLink = createHttpLink({
  uri: "http://localhost:3001/graphql",
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

// DELETE THE 2 DIVS IN FUNCTION APP
function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/MyGarden" element={<MyGarden />} />
          <Route path="/search" element={<Search />} />
          <Route path="/plant" element={<Plant />} />
        </Routes>
      </Router>
    </ApolloProvider>
  );
}

export default App;
