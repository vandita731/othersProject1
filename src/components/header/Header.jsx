import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="shadow sticky z-50 top-0">
      {/* Top Bar */}
      <div className="flex flex-col items-center justify-center bg-[#0d47a1]">
        <br />
        <h1 className="text-3xl font-bold text-white">
          NextGen Data Innovations Pvt. Ltd.
        </h1>
        <br />
      </div>

      {/* Navbar */}
      <nav className="bg-white border-gray-200 px-4 lg:px-3 py-2">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src="/logo_web.jpg" className="mr-3 h-12" alt="Logo" />
          </Link>

          {/* Hamburger button (only mobile) */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-gray-500 rounded-lg lg:hidden hover:bg-gray-100"
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

          {/* Nav Links */}
          <div
            className={`${isOpen ? 'block' : 'hidden'} w-full lg:flex lg:w-auto lg:order-1`}
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <NavLink
                  to="/"
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 ${
                      isActive ? 'text-[#0d47a1]' : 'text-gray-700'
                    } hover:text-[#0d47a1]`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 ${
                      isActive ? 'text-[#0d47a1]' : 'text-gray-700'
                    } hover:text-[#0d47a1]`
                  }
                >
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/services"
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 ${
                      isActive ? 'text-[#0d47a1]' : 'text-gray-700'
                    } hover:text-[#0d47a1]`
                  }
                >
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 ${
                      isActive ? 'text-[#0d47a1]' : 'text-gray-700'
                    } hover:text-[#0d47a1]`
                  }
                >
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
