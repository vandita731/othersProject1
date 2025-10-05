import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logoWeb from "../../images/logo_web.jpg";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="shadow sticky z-50 top-0 bg-white">
      <nav className="border-gray-200 px-4 lg:px-6 py-3">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          {/* Logo + Company Name */}
          <Link to="/" className="flex items-center space-x-3">
            <img src={logoWeb} className="h-12" alt="Logo" />
            <span className="self-center text-lg lg:text-xl font-bold whitespace-nowrap bg-gradient-to-r from-[#d81b60] via-[#8e24aa] to-[#1e88e5] bg-clip-text text-transparent">
              NEXTGENVECTORA DATA INNOVATIONS (OPC) PRIVATE LIMITED
            </span>
          </Link>

          {/* Hamburger Button (Mobile) */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          {/* Navigation Links */}
          <div
            className={`${isOpen ? "block" : "hidden"} w-full lg:flex lg:w-auto lg:order-1`}
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              {["/", "/about", "/services", "/contact"].map((path, idx) => {
                const label = ["Home", "About Us", "Services", "Contact Us"][idx];
                return (
                  <li key={idx}>
                    <NavLink
                      to={path}
                      onClick={() => setIsOpen(false)}
                      className={({ isActive }) =>
                        `block py-2 pr-4 pl-3 rounded-lg transition-all duration-300 ${
                          isActive
                            ? "text-white bg-gradient-to-r from-[#d81b60] via-[#8e24aa] to-[#1e88e5]"
                            : "text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-[#d81b60] hover:via-[#8e24aa] hover:to-[#1e88e5]"
                        }`
                      }
                    >
                      {label}
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
