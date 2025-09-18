import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function About() {
  // Slider images
  const sliderImages = ["/a.png", "/b.png", "/c.png", "/d.png", "/f.png"];

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
  };

  return (
    <div className="py-16 bg-blue-100 min-h-screen"> {/* ✅ background applied */}
      <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        {/* Top Section - Slider + Text */}
        <div className="space-y-8 md:space-y-0 md:flex md:gap-10 lg:items-center lg:gap-16">
          {/* Slider */}
          <div className="md:w-5/12 lg:w-1/3">
            <Slider {...settings}>
              {sliderImages.map((src, idx) => (
                <div key={idx} className="flex justify-center">
                  <img
                    src={src}
                    alt={`Slide ${idx + 1}`}
                    className="rounded-xl shadow-lg max-h-[350px] object-contain mx-auto"
                  />
                </div>
              ))}
            </Slider>
          </div>

          {/* Text */}
          <div className="md:w-7/12 lg:w-6/12">
            <h2 className="text-2xl text-[#0d47a1] font-bold md:text-4xl">
              NextGen Data Innovations Pvt. Ltd.
            </h2>
            <p className="mt-6 text-gray-700 leading-relaxed">
              At NextGen Data Innovations Pvt. Ltd., we specialize in creating curated, 
              ethical, and scalable datasets that power the future of artificial intelligence. 
              Our mission is to deliver high-quality data solutions that accelerate advancements 
              in machine learning and deep learning applications.
            </p>

            <ul className="list-disc list-inside mt-4 pl-5 text-gray-800 space-y-2">
              <li>Multilingual text datasets for inclusive AI solutions</li>
              <li>Domain-specific knowledge repositories</li>
              <li>Annotated data for NLP and computer vision</li>
              <li>Scalable and efficient data pipeline solutions</li>
            </ul>
          </div>
        </div>

        {/* Static Image below everything */}
        <div className="mt-20">
          {/* Centered Image */}
          <div className="flex justify-center">
            <img
              src="/img.png"
              alt="About NextGen Data Innovations"
              className="rounded-lg shadow-md max-h-[400px] object-contain"
            />
          </div>

          {/* Extra Info - 2x2 Grid */}
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-2">
            {/* Block 1 */}
            <div className="p-6 bg-white rounded-xl shadow hover:shadow-md transition">
              <h3 className="font-semibold text-lg text-[#0d47a1] mb-2">
                🌐 Multilingual Text Datasets
              </h3>
              <p className="text-gray-700">
                High-quality datasets across multiple languages to enable inclusive 
                and diverse NLP solutions.
              </p>
            </div>

            {/* Block 2 */}
            <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
              <h3 className="font-semibold text-lg text-[#0d47a1] mb-2">
                📚 Domain-Specific Knowledge Corpora
              </h3>
              <p className="text-gray-700">
                Specialized knowledge repositories tailored to industries and 
                domains for effective data-driven insights.
              </p>
            </div>

            {/* Block 3 */}
            <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
              <h3 className="font-semibold text-lg text-[#0d47a1] mb-2">
                📷 Annotated Data for NLP & Vision
              </h3>
              <p className="text-gray-700">
                Precisely annotated datasets for NLP and computer vision, ensuring 
                accuracy and reliability in AI training.
              </p>
            </div>

            {/* Block 4 */}
            <div className="p-6 bg-white rounded-xl shadow hover:shadow-md transition">
              <h3 className="font-semibold text-lg text-[#0d47a1] mb-2">
                ⚙️ High-Quality Data Pipelines
              </h3>
              <p className="text-gray-700">
                Scalable, secure, and efficient data pipelines for seamless data 
                collection, processing, and delivery.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
