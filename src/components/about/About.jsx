import React, { useState, useEffect } from "react";

// Import images
import aImg from "../../images/a.png";
import bImg from "../../images/b.png";
import cImg from "../../images/c.png";
import dImg from "../../images/d.png";
import fImg from "../../images/f.png";
import staticImg from "../../images/img.png";

export default function About() {
  const sliderImages = [aImg, bImg, cImg, dImg, fImg];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % sliderImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [sliderImages.length]);

  return (
    <div className="py-20 bg-gradient-to-b from-white via-blue-50 to-blue-100 min-h-screen">
      <div className="container mx-auto px-6 md:px-12 xl:px-6">
        <div className="md:flex md:gap-12 lg:items-center lg:gap-20">
          
          {/* Image Slider */}
          <div className="md:w-5/12 lg:w-1/3 relative overflow-hidden rounded-2xl shadow-lg h-[350px] bg-white/40 backdrop-blur-md">
            {sliderImages.map((src, idx) => (
              <img
                key={idx}
                src={src}
                alt={`Slide ${idx + 1}`}
                className={`absolute inset-0 w-full h-full object-contain transition-all duration-1000 ease-in-out ${
                  idx === current ? "opacity-100 scale-100" : "opacity-0 scale-95"
                }`}
              />
            ))}

            {/* Dots */}
            <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex gap-2">
              {sliderImages.map((_, idx) => (
                <button
                  key={idx}
                  aria-label={`Go to slide ${idx + 1}`}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    idx === current ? "bg-[#1e3a8a]" : "bg-gray-300"
                  }`}
                  onClick={() => setCurrent(idx)}
                />
              ))}
            </div>
          </div>

          {/* About Text */}
          <div className="md:w-7/12 lg:w-6/12 mt-10 md:mt-0">
            <h2 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-[#1e3a8a] via-[#4f46e5] to-[#8e24aa] bg-clip-text text-transparent">
              NEXTGENVECTORA DATA INNOVATIONS (OPC) PRIVATE LIMITED
            </h2>

            <p className="mt-6 text-gray-700 leading-relaxed text-lg">
              We specialize in designing curated, ethical, and scalable datasets that 
              drive the next generation of Artificial Intelligence. Our mission is to 
              empower industries with precise, multilingual, and domain-specific data 
              that fuels innovation.
            </p>

            <ul className="list-disc list-inside mt-6 text-gray-800 space-y-3">
              <li>🌐 Multilingual datasets for inclusive AI development</li>
              <li>🧠 Domain-specific repositories for knowledge-driven systems</li>
              <li>📊 Annotated data for NLP, CV, and Speech AI</li>
              <li>⚙️ End-to-end scalable data pipeline design</li>
            </ul>
          </div>
        </div>

        {/* Static Image + Values Grid */}
        <div className="mt-20">
          <div className="flex justify-center">
            <img
              src={staticImg}
              alt="About NextGenVectora"
              className="rounded-xl shadow-lg max-h-[400px] object-contain"
              loading="lazy"
            />
          </div>

          <h3 className="text-3xl font-semibold text-center mt-16 mb-10 text-[#1e3a8a]">
            What Defines Us
          </h3>

          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-2">
            {[
              {
                title: "🚀 Innovation & Scalability",
                text: "We constantly evolve our processes to meet global AI data needs with efficiency and precision.",
              },
              {
                title: "🧩 Ethical AI Data",
                text: "We believe in transparency, inclusivity, and quality to ensure ethical data creation.",
              },
              {
                title: "📈 Data Intelligence",
                text: "Our experts transform raw information into structured, high-impact datasets.",
              },
              {
                title: "🤝 Collaboration",
                text: "Partnering with businesses, researchers, and developers to co-create data solutions.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="p-8 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 text-center"
              >
                <h4 className="text-xl font-semibold text-[#1e3a8a] mb-2">
                  {item.title}
                </h4>
                <p className="text-gray-700">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
