import React from "react";
import Plant from "./pages/Plant";
import Home from "./pages/Home";
import Signup from "./pages/CreateAccount";
<<<<<<< HEAD
import Calender from "./pages/Calender";
import MyGarden from "./pages/MyGarden";
=======
import Plant from "./pages/Plant";
>>>>>>> 1c9d173f909bc29d4dc16a77b46fdfd7aa855be5

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

function App() {
  return (
    <ApolloProvider client={client}>

      <Router>
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/signup"
            element={<Signup />}
          />
          <Route path="/" element={<Home />} />
          <Route path="/calender" element={<Calender />} />
          <Route path="/MyGarden" element={<MyGarden />} />
          <Route path="/plant" element={<Plant />} />
          <Route path="/search" element={<Search />} />
          <Route path="/plant" element={<Plant />} />
        </Routes>
      </Router>
      


    </ApolloProvider>
  );
}

export default App;
