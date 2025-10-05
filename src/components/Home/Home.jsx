import React from "react";
import logoImg from "../../images/logo_img.jpg";

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-white via-blue-50 to-blue-100 flex flex-col items-center justify-center">
      <div className="max-w-6xl text-center px-6 py-16">
        
        {/* Heading Section */}
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight bg-gradient-to-r from-[#1e3a8a] via-[#4f46e5] to-[#8e24aa] bg-clip-text text-transparent">
          Empowering AI with Intelligent Data
        </h1>
        
        <p className="mt-6 text-gray-700 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
          NEXTGENVECTORA DATA INNOVATIONS (OPC) PRIVATE LIMITED specializes in
          building <span className="font-semibold text-[#1e3a8a]">domain-specific, multilingual, and high-quality datasets </span> 
          that accelerate AI model training, fine-tuning, and deployment.
        </p>

        {/* Logo Section */}
        <div className="mt-12 flex justify-center">
          <div className="relative bg-white/70 backdrop-blur-lg p-4 rounded-full shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <img
              className="w-64 h-64 sm:w-80 sm:h-80 rounded-full object-contain"
              src={logoImg}
              alt="NextGenVectora Logo"
            />
          </div>
        </div>

        {/* Sub-heading */}
        <h2 className="mt-12 text-xl sm:text-2xl font-semibold text-[#1e3a8a]">
          Transforming Data into Intelligence — The NextGen Way.
        </h2>

        {/* Divider Line */}
        <div className="mt-8 w-24 h-1 mx-auto bg-gradient-to-r from-[#8e24aa] via-[#4f46e5] to-[#1e3a8a] rounded-full" />
      </div>
    </div>
  );
}
