import React, { useState } from "react";

function Service() {
  const [activeSlide, setActiveSlide] = useState(1);
  const slides = [1, 2, 3, 4, 5];

  const nextSlide = () => {
    setActiveSlide(activeSlide === slides.length ? 1 : activeSlide + 1);
  };

  const prevSlide = () => {
    setActiveSlide(activeSlide === 1 ? slides.length : activeSlide - 1);
  };

  return (
    <div className="bg-teal-100 h-screen flex flex-col justify-center items-center">
      <div className="max-w-4xl mx-auto relative">
        {/* Slide Display */}
        {slides.map(
          (slide) =>
            activeSlide === slide && (
              <div
                key={slide}
                className="p-24 font-bold text-5xl h-64 flex items-center bg-teal-500 text-white rounded-lg"
              >
                <span className="w-12 text-center">{slide}</span>
                <span className="text-teal-300">/</span>
                <span className="w-12 text-center">{slides.length}</span>
              </div>
            )
        )}

        {/* Navigation Buttons */}
        <div className="absolute inset-0 flex">
          <div className="flex items-center justify-start w-1/2">
            <button
              className="bg-teal-100 text-teal-500 hover:text-orange-500 font-bold hover:shadow-lg rounded-full w-12 h-12 -ml-6"
              onClick={prevSlide}
            >
              &#8592;
            </button>
          </div>
          <div className="flex items-center justify-end w-1/2">
            <button
              className="bg-teal-100 text-teal-500 hover:text-orange-500 font-bold hover:shadow rounded-full w-12 h-12 -mr-6"
              onClick={nextSlide}
            >
              &#8594;
            </button>
          </div>
        </div>

        {/* Slide Indicator */}
        <div className="absolute w-full flex items-center justify-center px-4">
          {slides.map((slide) => (
            <button
              key={slide}
              className="flex-1 w-4 h-2 mt-4 mx-2 mb-0 rounded-full overflow-hidden transition-colors duration-200 ease-out hover:bg-teal-600 hover:shadow-lg"
              style={{
                backgroundColor: activeSlide === slide ? "#F97316" : "#4D908E", // Orange when active
              }}
              onClick={() => setActiveSlide(slide)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Service;
