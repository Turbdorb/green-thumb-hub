import React from "react";
import Jumbotron from "../components/Jumbotron";
import Login from "../components/Login";

const Home = () => {
  return (
    <div className="flex flex-col relative">
      {/* <CategoryMenu />
      <ProductList />
      <Cart /> */}
      <Jumbotron />
      <Login />
    </div>
  );
};

export default Home;