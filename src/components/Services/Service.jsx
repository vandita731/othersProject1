import React, { useState, useEffect } from "react";

// Import images as modules
import img1 from "../../images/1.png";
import img2 from "../../images/2.png";
import img3 from "../../images/3.png";
import img4 from "../../images/4.png";
import img5 from "../../images/5.png";
import img6 from "../../images/6.png";
import img7 from "../../images/7.png";

export default function Services() {
  const services = [
    {
      title: "📊 Custom Dataset Creation",
      description:
        "Tailored textual datasets for NLP tasks such as summarization, classification, question answering, and more.",
    },
    {
      title: "🌐 Multilingual Data Curation",
      description:
        "Building datasets in Indian regional and global languages for robust multilingual AI applications.",
    },
    {
      title: "🤖 Training Data for LLMs",
      description:
        "High-quality data pipelines to enhance and fine-tune large language models for industry-specific needs.",
    },
    {
      title: "🔍 Annotation & Labeling",
      description:
        "Human + AI-assisted annotation of text, images, video, and speech data for machine learning and vision tasks.",
    },
    {
      title: "🔄 Data Processing Pipelines",
      description:
        "Scalable pipelines for cleaning, structuring, and augmenting unstructured datasets.",
    },
  ];

  const sliderImages = [img1, img2, img3, img4, img5, img6, img7];
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [sliderImages.length]);

  return (
    <section className="py-16 bg-gradient-to-b from-blue-50 via-white to-blue-100 min-h-screen">
      <div className="container mx-auto px-6 md:px-12 xl:px-6">
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12 bg-gradient-to-r from-[#d81b60] via-[#8e24aa] to-[#1e88e5] bg-clip-text text-transparent">
          Our Services
        </h2>

        {/* Services Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-20">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-2xl shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center border border-transparent hover:border-[#8e24aa]/30"
            >
              <h3 className="text-xl font-semibold bg-gradient-to-r from-[#d81b60] via-[#8e24aa] to-[#1e88e5] bg-clip-text text-transparent">
                {service.title}
              </h3>
              <p className="mt-3 text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Image Slider */}
        <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-[#d81b60] via-[#8e24aa] to-[#1e88e5] bg-clip-text text-transparent">
          Gallery
        </h2>
        <div className="relative w-full max-w-3xl mx-auto">
          <div className="relative h-96 rounded-2xl overflow-hidden shadow-lg border border-[#8e24aa]/20">
            {sliderImages.map((src, idx) => (
              <img
                key={idx}
                src={src}
                alt={`Slide ${idx + 1}`}
                className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-700 ${
                  idx === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
                }`}
              />
            ))}
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center mt-5 space-x-2">
            {sliderImages.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`w-3 h-3 rounded-full transition-all ${
                  idx === currentSlide
                    ? "bg-[#8e24aa] scale-110"
                    : "bg-[#0d47a1]/60 hover:bg-[#8e24aa]/60"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
