import React from "react";
import logo from "../images/roses.jpg";
import Header from "../components/Header";
import Signups from "../components/Signup";

const Signup = () => {
    return (
        <div style={{ backgroundImage: `url(${logo})`, backgroundSize: 'cover', width: '100vw', height: '100vh' }}>
            <div className="p-14 container">
                <Header
                    heading="Welcome to GreenThumb Hub!"
                    paragraph="Already have an account?"
                    linkName="Login"
                    linkUrl="/"
                />
                <Signups />
            </div>
        </div>
    );
};

export default Signup;