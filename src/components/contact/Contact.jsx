import React from "react";

export default function Contact() {
  return (
    <div className="relative flex items-top justify-center min-h-[700px] bg-gradient-to-b from-[#e3f2fd] via-[#f8f9fa] to-[#fff] sm:items-center sm:pt-0">
      <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
        <div className="overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* Contact Info Section */}
            <div className="p-8 mr-2 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all">
              <h1 className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-[#d81b60] via-[#8e24aa] to-[#1e88e5] bg-clip-text text-transparent">
                Contact Us
              </h1>
              <p className="text-lg sm:text-xl font-medium text-gray-600 mt-3">
                Get in touch with{" "}
                <span className="font-bold text-[#1e88e5]">
                  NEXTGENVECTORA DATA INNOVATIONS (OPC) PRIVATE LIMITED
                </span>
                . We’d love to connect and explore how we can collaborate to
                shape the future of AI-driven data solutions.
              </p>

              {/* Address */}
              <div className="flex items-start mt-8 text-gray-700">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  className="w-8 h-8 text-[#1e88e5] flex-shrink-0"
                >
                  <path d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z" />
                  <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div className="ml-4 text-md font-semibold">
                  #17, 2nd Floor, 7th Main Road, II Stage, Indiranagar, Bangalore 560038
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center mt-5 text-gray-700">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  className="w-8 h-8 text-[#8e24aa]"
                >
                  <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11 11 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <div className="ml-4 text-md font-semibold">+91 97434 92247</div>
              </div>

              {/* Email */}
              <div className="flex items-center mt-5 text-gray-700">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  className="w-8 h-8 text-[#d81b60]"
                >
                  <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <div className="ml-4 text-md font-semibold">
                  anusha.joshi@nextgendatasets.com 
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <form className="p-8 flex flex-col justify-center bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all">
              <h2 className="text-2xl font-semibold text-center bg-gradient-to-r from-[#d81b60] via-[#8e24aa] to-[#1e88e5] bg-clip-text text-transparent mb-4">
                Send Us a Message
              </h2>

              <div className="flex flex-col mb-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  className="py-3 px-4 rounded-lg bg-gray-50 border border-gray-300 text-gray-800 font-medium focus:border-[#8e24aa] focus:ring-1 focus:ring-[#8e24aa] outline-none transition"
                />
              </div>

              <div className="flex flex-col mb-4">
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  className="py-3 px-4 rounded-lg bg-gray-50 border border-gray-300 text-gray-800 font-medium focus:border-[#1e88e5] focus:ring-1 focus:ring-[#1e88e5] outline-none transition"
                />
              </div>

              <div className="flex flex-col mb-4">
                <input
                  type="tel"
                  name="tel"
                  placeholder="Phone Number"
                  className="py-3 px-4 rounded-lg bg-gray-50 border border-gray-300 text-gray-800 font-medium focus:border-[#d81b60] focus:ring-1 focus:ring-[#d81b60] outline-none transition"
                />
              </div>

              <div className="flex flex-col mb-4">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows="4"
                  className="py-3 px-4 rounded-lg bg-gray-50 border border-gray-300 text-gray-800 font-medium focus:border-[#8e24aa] focus:ring-1 focus:ring-[#8e24aa] outline-none transition resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full md:w-40 mx-auto bg-gradient-to-r from-[#d81b60] via-[#8e24aa] to-[#1e88e5] text-white font-bold py-3 px-6 rounded-lg mt-4 hover:opacity-90 shadow-md transition-all duration-300"
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
