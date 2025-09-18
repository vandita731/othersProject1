import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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

  // Your slider images
  const sliderImages = [
    "/1.png",
    "/2.png",
    "/3.png",
    "/4.png",
    "/5.png",
    "/6.png",
    "/7.png",
  ];

  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    centerMode: true, // keeps slide centered
    centerPadding: "0px", // no side padding
  };

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

        {/* Image Slider */}
        <h2 className="text-2xl font-bold text-[#0d47a1] text-center mb-8">
          Gallery
        </h2>

        <div className="flex justify-center">
          <div className="w-full max-w-3xl">
            <Slider {...settings} className="mx-auto">
              {sliderImages.map((src, idx) => (
                <div key={idx} className="flex justify-center">
                  <img
                    src={src}
                    alt={`Slide ${idx + 1}`}
                    className="rounded-xl shadow-lg max-h-[400px] object-contain mx-auto"
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>

        <style jsx global>{`
          .slick-slide {
            display: flex !important;
            justify-content: center;
            align-items: center;
          }
          .slick-dots {
            bottom: -35px;
          }
          .slick-dots li button:before {
            font-size: 14px;
            color: #0d47a1;
            opacity: 0.7;
          }
          .slick-dots li.slick-active button:before {
            font-size: 18px;
            color: #0d47a1;
            opacity: 1;
          }
        `}</style>
      </div>
    </section>
  );
}
