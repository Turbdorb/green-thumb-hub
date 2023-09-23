import React from "react";
import logo from "../images/plant.jpg";
import Header from "../components/Header";
import Login from "../components/Login";

const Home = () => {
  return (
    <div style={{ backgroundImage: `url(${logo})`, height: '100vh', width: '100vw', backgroundPosition: 'center', backgroundSize: 'cover'}}>
      <div className="p-14">
        <Header
          heading="Welcome to GreenThumb Hub!"
          heading2="Login to your account"
          paragraph="Don't have an account yet?"
          linkName="Signup"
          linkUrl="/signup"
        />
        <Login />
      </div>
    </div>
  );
};

export default Home;

// className="flex justify-center items-center" style={{ backgroundImage: `url(${logo})`, backgroundSize: 'cover', width: '100vw', height: '100vh' }}