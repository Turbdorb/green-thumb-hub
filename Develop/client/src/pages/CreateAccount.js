import React from "react";
// import Login from "../components/Login";
import Signups from "../components/Signup";
import Nav from "../components/Nav";
import logo from "../images/roses.jpg";

const Signup = () => {
    return (
        <div className="flex flex-col relative">
            <Nav />
            <img src={logo} className="min-w-full" alt="plant" />

            {/* <Login /> */}
            <Signups />
        </div>
    );
};

export default Signup;