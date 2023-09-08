import React from "react";
import Login from "../components/Login";
// import Signup from "../components/Signup";
import Nav from "../components/Nav";
import logo from "../images/plant.jpg";

const Home = () => {
  return (
    <div className="flex flex-col relative">
      <Nav />
      <img src={logo} className="min-w-full" alt="plant" />
      
      <Login />
      {/* <Signup /> */}
    </div>
  );
};

export default Home;