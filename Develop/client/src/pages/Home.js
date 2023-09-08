import React from "react";
import Jumbotron from "../components/Jumbotron";
import Login from "../components/Login";
import Nav from "../components/Nav";
import logo from "../images/plant.jpg";

const Home = () => {
  return (
    <div className="flex flex-col relative">
      <Nav />
      <img src={logo} className="h-screen" alt="plant" />
      <Jumbotron />
      <Login />
    </div>
  );
};

export default Home;