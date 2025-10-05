import React from "react";
import { Link } from "react-router-dom";
import logoImg from "../../images/logo_web.jpg";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#f3e5f5] via-[#e3f2fd] to-white border-t border-gray-200">
      <div className="mx-auto w-full max-w-screen-xl px-4 py-10 lg:py-12">
        <div className="md:flex md:justify-between md:items-start">
          {/* Logo Section */}
          <div className="mb-6 md:mb-0 flex flex-col items-center md:items-start">
            <Link to="/" className="flex items-center">
              <img
                src={logoImg}
                className="h-20 w-auto rounded-lg shadow-sm hover:shadow-md transition duration-300"
                alt="NEXTGENVECTORA Logo"
              />
            </Link>
            <p className="mt-4 text-gray-600 max-w-sm text-center md:text-left">
              Empowering the future of AI with curated, multilingual, and ethical data solutions.
            </p>
          </div>

          {/* Links Grid */}
          <div className="grid grid-cols-2 gap-8 sm:gap-10 sm:grid-cols-3 text-center md:text-left">
            {/* Resources */}
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase bg-gradient-to-r from-[#d81b60] via-[#8e24aa] to-[#1e88e5] bg-clip-text text-transparent">
                Resources
              </h2>
              <ul className="text-gray-700 font-medium space-y-2">
                <li>
                  <Link to="/" className="hover:text-[#1e88e5] transition">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="hover:text-[#1e88e5] transition">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-[#1e88e5] transition">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Follow Us */}
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase bg-gradient-to-r from-[#d81b60] via-[#8e24aa] to-[#1e88e5] bg-clip-text text-transparent">
                Follow Us
              </h2>
              <ul className="text-gray-700 font-medium space-y-2">
                <li>
                  <Link to="/" className="hover:text-[#d81b60] transition">
                    Instagram
                  </Link>
                </li>
                <li>
                  <Link to="/" className="hover:text-[#8e24aa] transition">
                    LinkedIn
                  </Link>
                </li>
                <li>
                  <Link to="/" className="hover:text-[#1e88e5] transition">
                    Discord
                  </Link>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase bg-gradient-to-r from-[#d81b60] via-[#8e24aa] to-[#1e88e5] bg-clip-text text-transparent">
                Legal
              </h2>
              <ul className="text-gray-700 font-medium space-y-2">
                <li>
                  <Link to="#" className="hover:text-[#1e88e5] transition">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:text-[#1e88e5] transition">
                    Terms &amp; Conditions
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <hr className="my-8 border-gray-300 sm:mx-auto" />

        {/* Bottom Section */}
        <div className="sm:flex sm:items-center sm:justify-between text-center">
          <span className="text-sm text-gray-600 sm:text-left">
            © 2025{" "}
            <span className="font-semibold bg-gradient-to-r from-[#d81b60] via-[#8e24aa] to-[#1e88e5] bg-clip-text text-transparent">
              NEXTGENVECTORA DATA INNOVATIONS (OPC) PRIVATE LIMITED
            </span>
            . All Rights Reserved.
          </span>

          <div className="flex mt-4 justify-center sm:mt-0 space-x-4">
            {/* Example Social Icons */}
            <Link
              to="/"
              className="text-gray-500 hover:text-[#d81b60] transition"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram text-lg"></i>
            </Link>
            <Link
              to="/"
              className="text-gray-500 hover:text-[#8e24aa] transition"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin text-lg"></i>
            </Link>
            <Link
              to="/"
              className="text-gray-500 hover:text-[#1e88e5] transition"
              aria-label="Discord"
            >
              <i className="fab fa-discord text-lg"></i>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
