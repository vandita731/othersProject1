import React from "react";

export default function Contact() {
  return (
    <div className="relative flex items-top justify-center min-h-[700px] bg-white sm:items-center sm:pt-0">
      <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
        <div className=" overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Contact Info Section */}
            <div className="p-6 mr-2 bg-gray-100 sm:rounded-lg shadow-md">
              <h1 className="text-3xl sm:text-4xl text-[#0d47a1] font-extrabold tracking-tight">
                Contact Us
              </h1>
              <p className="text-lg sm:text-xl font-medium text-gray-600 mt-2">
                Get in touch with <span className="font-bold text-gray-800">NextGen Data Innovations Pvt. Ltd.</span>  
                Fill in the form or use the details below to start a conversation.
              </p>

              {/* Address */}
              <div className="flex items-center mt-8 text-gray-600">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  className="w-8 h-8 text-[#0d47a1]"
                >
                  <path d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z" />
                  <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div className="ml-4 text-md tracking-wide font-semibold w-64">
                  NextGen Data Innovations Pvt. Ltd.<br />
                  Acme Inc, Street, State, Postal Code
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center mt-4 text-gray-600">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  className="w-8 h-8 text-[#0d47a1]"
                >
                  <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11 11 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <div className="ml-4 text-md tracking-wide font-semibold w-64">
                  +44 1234567890
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center mt-4 text-gray-600">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  className="w-8 h-8 text-[#0d47a1]"
                >
                  <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <div className="ml-4 text-md tracking-wide font-semibold w-64">
                  info@nextgendata.com
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <form className="p-6 flex flex-col justify-center bg-white shadow-md sm:rounded-lg">
              <div className="flex flex-col">
                <label htmlFor="name" className="hidden">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Full Name"
                  className="mt-2 py-3 px-3 rounded-lg bg-gray-50 border border-gray-300 text-gray-800 font-medium focus:border-[#0d47a1] focus:outline-none"
                />
              </div>

              <div className="flex flex-col mt-4">
                <label htmlFor="email" className="hidden">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  className="mt-2 py-3 px-3 rounded-lg bg-gray-50 border border-gray-300 text-gray-800 font-medium focus:border-[#0d47a1] focus:outline-none"
                />
              </div>

              <div className="flex flex-col mt-4">
                <label htmlFor="tel" className="hidden">
                  Number
                </label>
                <input
                  type="tel"
                  name="tel"
                  id="tel"
                  placeholder="Telephone Number"
                  className="mt-2 py-3 px-3 rounded-lg bg-gray-50 border border-gray-300 text-gray-800 font-medium focus:border-[#0d47a1] focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="md:w-40 bg-[#0d47a1] text-white font-bold py-3 px-6 rounded-lg mt-6 hover:bg-[#0d47a1] transition ease-in-out duration-300"
              >
                Submit
              </button>
            </form>

          </div>
        </div>
      </div>
    </div>
  );
}
