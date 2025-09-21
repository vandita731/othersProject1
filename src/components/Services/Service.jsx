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
    { title: "📊 Custom Dataset Creation", description: "Tailored textual datasets for NLP tasks such as summarization, classification, question answering, and more." },
    { title: "🌐 Multilingual Data Curation", description: "Building datasets in Indian regional and global languages for robust multilingual AI applications." },
    { title: "🤖 Training Data for LLMs", description: "High-quality data pipelines to enhance and fine-tune large language models for industry-specific needs." },
    { title: "🔍 Annotation & Labeling", description: "Human + AI-assisted annotation of text, images, video, and speech data for machine learning and vision tasks." },
    { title: "🔄 Data Processing Pipelines", description: "Scalable pipelines for cleaning, structuring, and augmenting unstructured datasets." },
  ];

  const sliderImages = [img1, img2, img3, img4, img5, img6, img7];
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-slide every 4s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    }, 4000); // 4 seconds
    return () => clearInterval(interval);
  }, [sliderImages.length]);

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
              <h3 className="text-xl font-semibold text-gray-800">{service.title}</h3>
              <p className="mt-3 text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Slider */}
        <h2 className="text-2xl font-bold text-[#0d47a1] text-center mb-8">Gallery</h2>
        <div className="relative w-full max-w-3xl mx-auto">
          <div className="relative h-96 rounded-xl overflow-hidden shadow-lg">
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

          {/* Dots always below slider */}
          <div className="flex justify-center mt-4 space-x-2">
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
