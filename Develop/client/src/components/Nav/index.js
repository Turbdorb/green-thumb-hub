import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import gthlogo from "../../images/logo_transparent.png";

function Nav() {

    function showNavigation() {
        if (Auth.loggedIn()) {
            return (
                <div>
                    <button type="button" class="text-zinc-50 bg-green-600 hover:bg-green-500 focus:outline-none focus:ring-green-500 focus:ring-1 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 shadow-sm shadow-black">            <a href="/" onClick={() => Auth.logout()}>
                        Logout
                    </a></button>
                    <button data-collapse-toggle="navbar-sticky" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-sticky" aria-expanded="false">
                        <span class="sr-only">Open main menu</span>
                        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                </div>
            );
        } else {
            return (
                <div>
                    <Link to="/signup">
                        <button type="button" class="text-zinc-50 bg-green-600 hover:bg-green-500 focus:outline-none focus:ring-green-500 focus:ring-1 font-medium rounded-lg text-sm px-4 py-2 text-center relative sm:bottom-1.5 mr-3 md:mr-0 shadow-sm shadow-black">Signup</button>
                    </Link>
                    <button data-collapse-toggle="navbar-sticky" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-zinc-500 rounded-lg md:hidden hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-zinc-200" aria-controls="navbar-sticky" aria-expanded="false">
                        <span class="sr-only">Open main menu</span>
                        <svg class="w-5 h-5 text-zinc-50" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                </div>
            );
        }
    }

    return (

        <header class="fixed w-full z-20 top-0 left-0 bg-green-500 border-b border-zinc-50 shadow-sm">
            <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
                <Link to="/" class="flex items-center hover:no-underline">
                    <img src={gthlogo} class="w-14 mr-1" alt="Green Thumb Hub Logo" />
                    <span class="self-center text-2xl text-zinc-50 font-semibold whitespace-nowrap">[insert name]</span>
                </Link>
                <div class="flex md:order-2">
                    <nav>
                        {showNavigation()}
                    </nav>
                </div>
                <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                    <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0">
                        <li>
                            <Link to="/" class="block relative top-2 py-2 pl-3 pr-4 text-zinc-50 rounded hover:no-underline hover:bg-green-700 hover:text-zinc-50 md:hover:bg-transparent md:p-0" aria-current="page">Home</Link>
                        </li>
                        <li>
                            <Link to="/plants" class="block relative top-2 py-2 pl-3 pr-4 text-zinc-50 rounded hover:no-underline hover:bg-green-700 hover:text-zinc-50 md:hover:bg-transparent md:p-0">Plants</Link>
                        </li>
                        <li>
                            <a href="#" class="block relative top-2 py-2 pl-3 pr-4 text-zinc-50 hover:bg-green-700 hover:text-zinc-50 md:hover:bg-transparent hover:no-underline rounded md:p-0">Services</a>
                        </li>
                        <li>
                            <a href="#" class="block relative top-2 py-2 pl-3 pr-4 text-zinc-50 hover:no-underline hover:bg-green-700 hover:text-zinc-50 md:hover:bg-transparent rounded md:p-0">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </header>

    );
}

export default Nav;
