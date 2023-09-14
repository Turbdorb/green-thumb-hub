import React from "react";
import logo from "../images/roses.jpg";
import Header from "../components/Header";
import Signups from "../components/Signup";

const Signup = () => {
    return (
        <div className="h-screen" style={{ backgroundImage: `url(${logo})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center center' }}>
            <div className="p-14 container">
                <Header
                    heading="Welcome to GreenThumb Hub!"
                    heading2="Signup!"
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