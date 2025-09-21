import React, { useState, useEffect } from "react";

export default function About() {
  const sliderImages = [
    "/images/a.png",
    "/images/b.png",
    "/images/c.png",
    "/images/d.png",
    "/images/f.png",
  ];

  const [current, setCurrent] = useState(0);

  // Auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % sliderImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [sliderImages.length]);

  return (
    <div className="py-16 bg-blue-100 min-h-screen">
      <div className="container mx-auto px-6 md:px-12 xl:px-6">
        <div className="space-y-8 md:space-y-0 md:flex md:gap-10 lg:items-center lg:gap-16">
          {/* Slider */}
          <div className="md:w-5/12 lg:w-1/3 relative overflow-hidden rounded-xl shadow-lg h-[350px]">
            {sliderImages.map((src, idx) => (
              <img
                key={idx}
                src={src}
                alt={`Slide ${idx + 1}`}
                loading="lazy"
                className={`absolute inset-0 w-full h-full object-contain mx-auto transition-opacity duration-700 ${
                  idx === current ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}

            {/* Dots */}
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-2">
              {sliderImages.map((_, idx) => (
                <button
                  key={idx}
                  aria-label={`Go to slide ${idx + 1}`}
                  className={`w-3 h-3 rounded-full ${
                    idx === current ? "bg-blue-700" : "bg-gray-300"
                  }`}
                  onClick={() => setCurrent(idx)}
                />
              ))}
            </div>
          </div>

          {/* Text Section */}
          <div className="md:w-7/12 lg:w-6/12">
            <h2 className="text-2xl text-[#0d47a1] font-bold md:text-4xl">
              NextGen Data Innovations Pvt. Ltd.
            </h2>
            <p className="mt-6 text-gray-700 leading-relaxed">
              At NextGen Data Innovations Pvt. Ltd., we specialize in creating curated,
              ethical, and scalable datasets that power the future of AI.
            </p>

            <ul className="list-disc list-inside mt-4 pl-5 text-gray-800 space-y-2">
              <li>Multilingual text datasets for inclusive AI solutions</li>
              <li>Domain-specific knowledge repositories</li>
              <li>Annotated data for NLP and computer vision</li>
              <li>Scalable and efficient data pipeline solutions</li>
            </ul>
          </div>
        </div>

        {/* Static Image + Grid */}
        <div className="mt-20">
          <div className="flex justify-center">
            <img
              src="/images/img.png"
              alt="About NextGen Data Innovations"
              className="rounded-lg shadow-md max-h-[400px] object-contain"
              loading="lazy"
            />
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-2">
            <div className="p-6 bg-white rounded-xl shadow hover:shadow-md transition">
              <h3 className="font-semibold text-lg text-[#0d47a1] mb-2">🌐 Multilingual Text Datasets</h3>
              <p className="text-gray-700">
                High-quality datasets across multiple languages for inclusive NLP solutions.
              </p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
              <h3 className="font-semibold text-lg text-[#0d47a1] mb-2">📚 Domain-Specific Knowledge Corpora</h3>
              <p className="text-gray-700">
                Specialized knowledge repositories tailored to industries and domains.
              </p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
              <h3 className="font-semibold text-lg text-[#0d47a1] mb-2">📷 Annotated Data for NLP & Vision</h3>
              <p className="text-gray-700">
                Precisely annotated datasets for NLP and computer vision, ensuring accuracy.
              </p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow hover:shadow-md transition">
              <h3 className="font-semibold text-lg text-[#0d47a1] mb-2">⚙️ High-Quality Data Pipelines</h3>
              <p className="text-gray-700">
                Scalable and efficient data pipelines for seamless data collection and delivery.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
