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
    <div className="py-16 bg-white">
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
            <p className="mt-6 text-gray-600 leading-relaxed">
              NextGen Data Innovations Pvt. Ltd. is dedicated to building curated,
              ethical, and scalable datasets for advancing machine learning and deep
              learning applications.
            </p>

            <ul className="list-disc list-inside mt-4 pl-5 text-gray-700 space-y-2">
              <li>Multilingual text datasets</li>
              <li>Domain-specific knowledge corpora</li>
              <li>Annotated data for NLP and vision tasks</li>
              <li>High-quality structured and unstructured data pipelines</li>
            </ul>
          </div>
        </div>

        {/* Static Image below everything */}
<div className="mt-20">
  {/* Centered Image */}
  <div className="flex justify-center">
    <img
      src="/img.png"
      alt="about company"
      className="rounded-lg shadow-md max-h-[400px] object-contain"
    />
  </div>

        {/* Extra Info - 2x2 Grid */}
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-2">
          <div className="p-6 bg-gray-50 rounded-xl shadow hover:shadow-md transition">
            <h3 className="font-semibold text-lg text-[#0d47a1] mb-2">
              🌐 Multilingual Text Datasets
            </h3>
            <p className="text-gray-600">
              Represented with icons of a globe, text, and chat bubbles. Suggests
              that we provide or create datasets in multiple languages for global
              NLP applications.
            </p>
          </div>

    {/* Block 2 */}
    <div className="p-6 bg-gray-50 rounded-xl shadow hover:shadow-lg transition">
      <h3 className="font-semibold text-lg text-[#0d47a1] mb-2">
        📚 Domain-Specific Knowledge Corpora
      </h3>
      <p>
        Illustrated with icons of a book, brain, and magnifying glass. Indicates
        that they curate or develop specialized knowledge datasets tailored to
        specific industries or domains.
      </p>
    </div>

    {/* Block 3 */}
    <div className="p-6 bg-gray-50 rounded-xl shadow hover:shadow-lg transition">
      <h3 className="font-semibold text-lg text-[#0d47a1] mb-2">
        📷 Annotated Data for NLP & Vision
      </h3>
      <p>
        Icons include a camera, text annotation symbols, and checkmarks.
        Highlights their capability in producing labeled datasets for AI
        training, covering both natural language processing and computer vision.
      </p>
    </div>

          <div className="p-6 bg-gray-50 rounded-xl shadow hover:shadow-md transition">
            <h3 className="font-semibold text-lg text-[#0d47a1] mb-2">
              ⚙️ High-Quality Data Pipelines
            </h3>
            <p className="text-gray-600">
              Depicted with gears, cloud storage, and flow diagrams. We build
              efficient and reliable pipelines for managing and delivering data at
              scale.
            </p>
          </div>
        </div>
      </div>
    </div>
    </div >
  );
}
