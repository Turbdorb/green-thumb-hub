import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";

function Nav() {

    function showNavigation() {
        // if (Auth.loggedIn()) {
        return (
            <ul className="flex space-x-3">
                <li className="border-black border-l border-r rounded-md p-2 hover:bg-green-100 hover:bg-opacity-50">
                    <Link to="/orderHistory">
                        Profile
                    </Link>
                </li>
                <li className="border-black border-l border-r rounded-md p-2 hover:bg-green-100 hover:bg-opacity-50">
                    {/* this is not using the Link component to logout or user and then refresh the application to the start */}
                    <a href="/" onClick={() => Auth.logout()}>
                        Logout
                    </a>
                </li>
            </ul>
        );
        // } else {
        //   return (
        //     <ul className="flex space-x-3">
        //       <li className="border-black border-l border-r rounded-md p-2 hover:bg-green-400">
        //         <Link to="/signup">
        //           Signup
        //         </Link>
        //       </li>
        //       <li className="border-black border-l border-r rounded-md p-2 hover:bg-green-400">
        //         <Link to="/login">
        //           Login
        //         </Link>
        //       </li>
        //     </ul>
        //   );
        // }
    }

    return (
        <header className=" sticky z-10 top-0 bg-opacity-100 bg-zinc-50 border-b border-black p-2">
            <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-3xl">
                <h1 className="text-2xl text-zinc-800 text-opacity-100">
                    <Link to="/">
                        <span role="img" aria-label="sprout">🌱 </span>
                        GreenThumbHub
                    </Link>
                </h1>

                <nav>
                    {showNavigation()}
                </nav>
            </div>
        </header>
    );
}

export default Nav;