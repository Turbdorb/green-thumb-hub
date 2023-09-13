import React from "react";
import Nav from "../components/Nav";
import Search from "../components/Search";
import Headers from "../components/Header";
import logo from "../images/plant.jpg";
console.log("Plant imported");




function Plant() {
  return (
    <div className="bg-gray-900 min-h-screen" style={{ backgroundImage: `url(${logo})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', height: '100%'}}>
      <Nav />
      <Headers
        heading2="GreenThumb Hub"
      />
      <Search />
    </div>
  );
}

export default Plant;