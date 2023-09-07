import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Uncomment import statement below after building queries and mutations
// import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

import Home from './pages/Home';
import Login from
import Signup from
import Nav from


function App() {
  return (
    <Router>
      <div className="flex-column justify-center align-center min-100-vh bg-gray-900">
        <Routes>
          <Route 
            path="/" 
            element={<Home />} 
          />
          <Route
            path="/login"
            element={<Login />}
          />
          <Route
            path="/signup"
            element={<Signup />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
