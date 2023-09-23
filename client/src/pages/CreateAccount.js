import React from "react";
import logo from "../images/roses.jpg";
import Header from "../components/Header";
import Signups from "../components/Signup";

const Signup = () => {
    return (
        <div style={{ backgroundImage: `url(${logo})`, height: '100vh', width: '100vw', backgroundPosition: 'center left', backgroundSize: 'cover'}}>
            <div className="p-14">
                <Header
                    heading="Welcome to GreenThumb Hub!"
                    heading2="Signup!"
                    paragraph="Already have an account?"
                    linkName="Login"
                    linkUrl="/"
                />
            </div>
                <Signups />
        </div>
    );
};

export default Signup;