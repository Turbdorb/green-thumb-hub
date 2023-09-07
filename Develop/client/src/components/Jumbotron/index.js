import React from "react";
import logo from '../../images/plant.jpg';




function Jumbotron(/*{ children }*/) {
  return (
    <div className="mx-auto">
    <img src={logo} className="relative -z-10 mx-auto min-w-full" />
      </div>
  );
}

export default Jumbotron;
