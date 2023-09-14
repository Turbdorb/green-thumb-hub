import React from "react";
import Nav from "../components/Nav";
import Search from "../components/Search";
import Headers from "../components/Header";
import logo from "../images/plant.jpg";
import Auth from "../utils/auth";
import { Navigate } from "react-router-dom";
import { Footer } from "../components/Footer/Footer";
console.log("Plant imported");




function Plant() {
  if (Auth.loggedIn()){
  return (
    <>
    <div className="bg-gray-900 min-h-screen" style={{ backgroundImage: `url(${logo})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', height: '100%'}}>
      <Nav />
      <Headers
        heading2="GreenThumb Hub"
      />
      <Search />
    </div>
    <Footer />
    </>
  );
} else {
  return ( <Navigate to="/" />
)}
}

export default Plant;