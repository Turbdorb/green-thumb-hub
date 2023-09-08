import React from "react";
import Jumbotron from "../components/Jumbotron";
import Login from "../components/Login";
import Nav from "../components/Nav";

const Home = () => {
  return (
    <div className="flex flex-col relative">
      {/* <CategoryMenu />
      <ProductList />
      <Cart /> */}
      <Nav />
      <Jumbotron />
      <Login />
    </div>
  );
};

export default Home;