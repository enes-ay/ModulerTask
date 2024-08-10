/* eslint-disable no-unused-vars */
// src/components/Navbar.js
import React from "react";
import logo from "../assets/images/logo.png"

const Navbar = () => {
  return (
    <nav className="bg-secondary shadow-md p-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="shrink-0 flex items-center">
              <a href="/">
              <img className=" h-5 w-auto md:h-8 md:w-auto"  src={logo} alt="Logo" />

              </a>
            </div>
      
          </div>
          <div className="hidden mx-10 sm:ml-6 sm:flex sm:items-center">
            <a
              href="https://www.behance.net/"
              target="_blank"
              className="border-b-2 border-transparent text-gray-900 inline-flex items-center px-1 pt-1 text-md  font-bold hover:border-gray-300"
            >
              Behance
            </a>{" "}
            <a
               href="https://www.behance.net/"
              target="_blank"
              className="border-b-2 border-transparent text-gray-900 inline-flex items-center px-1 pt-1 text-md  font-bold hover:border-gray-300"
            >
              Instagram
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              className="border-b-2 border-transparent text-gray-900 inline-flex items-center px-1 pt-1 text-md  font-bold  hover:border-gray-300"
            >
              LınkedIn
            </a>{" "}
            <a
               href="https://www.instagram.com/"
              target="_blank"
              className="border-b-2 border-transparent text-gray-900 inline-flex items-center px-1 pt-1 text-md  font-bold hover:border-gray-300"
            >
              Lets's Talk
            </a>
     
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
