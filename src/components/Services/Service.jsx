import React, { useState, useEffect } from "react";

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

  const sliderImages = [
    "/images/1.png",
    "/images/2.png",
    "/images/3.png",
    "/images/4.png",
    "/images/5.png",
    "/images/6.png",
    "/images/7.png",
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-slide every 3s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 bg-blue-100 min-h-screen">
      <div className="container m-auto px-6 md:px-12 xl:px-6">
        {/* Services Grid */}
        <h2 className="text-3xl font-bold text-[#0d47a1] md:text-4xl text-center mb-12">
          Our Services
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition flex flex-col items-center text-center"
            >
              <h3 className="text-xl font-semibold text-gray-800">
                {service.title}
              </h3>
              <p className="mt-3 text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Custom Slider */}
        <h2 className="text-2xl font-bold text-[#0d47a1] text-center mb-8">
          Gallery
        </h2>
        <div className="relative w-full max-w-3xl mx-auto h-96">
          {sliderImages.map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt={`Slide ${idx + 1}`}
              className={`absolute top-0 left-0 w-full h-96 object-contain rounded-xl shadow-lg transition-opacity duration-700 ${
                idx === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
            />
          ))}

          {/* Dots */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {sliderImages.map((_, idx) => (
              <button
                key={idx}
                className={`w-3 h-3 rounded-full ${
                  idx === currentSlide ? "bg-[#40bccc]" : "bg-[#0d47a1]/70"
                }`}
                onClick={() => setCurrentSlide(idx)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
