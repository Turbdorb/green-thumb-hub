import React from "react";
import Login from "../components/Login";
// import Signup from "../components/Signup";
import Nav from "../components/Nav";
import logo from "../images/plant.jpg";
import PlantCard from "../components/PlantCard";
import Search from "../components/Search";

const Home = () => {
  return (
    <div className="flex flex-col relative">
      <img src={logo} className="min-w-full" alt="plant" />
      <Nav />

      <Login />
      <Search />
    </div>
  );
};

export default Home;
