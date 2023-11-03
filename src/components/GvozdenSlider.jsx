/* GvozdenSlider is a custom slider made for this project */

import { useState } from "react";
import "./scss/gvozdenslider.scss";

// Import all images from "slider" folder
let slides = import.meta.glob(
  "/src/assets/images/slider/*.{png,jpg,jpeg,PNG,JPEG}",
  {
    eager: true,
    as: "url",
  }
);

slides = Object.keys(slides).map((key) => [key, slides[key]]);

export default function GvozdenSlider() {
  const [slideIndex, setSlideIndex] = useState(1);
  const sliderOptions = {
    speed: 0.7, // transition duration in seconds
    infiniteScroll: true,
    buttons: true,
    slideIndicator: true,
  };

  const { speed, infiniteScroll, buttons, slideIndicator } = sliderOptions;

  function prevSlide() {
    if (slideIndex > 1) setSlideIndex(slideIndex - 1);

    if (infiniteScroll && slideIndex == 1) {
      setSlideIndex(slides.length);
    }
  }

  function nextSlide() {
    if (infiniteScroll && slideIndex == slides.length) {
      setSlideIndex(1);
    }

    if (slideIndex < slides.length) setSlideIndex(slideIndex + 1);
  }

  function handleSlideClasses(index) {
    let slideClassname = "gvozden-slider__slide";
    let slideClasses = slideClassname + " ";

    switch (slideIndex - index) {
      case 2:
        slideClasses += slideClassname + "--prev";
        break;
      case 1:
        slideClasses += slideClassname + "--current";
        break;
      case 0:
        slideClasses += slideClassname + "--next";
        break;
      case -2:
        if (infiniteScroll) slideClasses += slideClassname + "--prev loop";
        break;
      case slides.length:
        if (infiniteScroll) slideClasses += slideClassname + "--next loop";
        break;
    }

    return slideClasses;
  }

  return (
    <div className="gvozden-slider">
      <div
        className="gvozden-slider__inner-wrapper"
        style={{ transitionDuration: speed + "s" }}
      >
        {slides.map((slide, index) => {
          return (
            <div key={index} className={handleSlideClasses(index)}>
              <img src={slide[0]} alt={"Beer slide " + (index + 1)} />
            </div>
          );
        })}
      </div>
      {buttons && (
        <>
          <button className="gvozden-slider__prev-button" onClick={prevSlide}>
            &larr;
          </button>
          <button className="gvozden-slider__next-button" onClick={nextSlide}>
            &rarr;
          </button>
        </>
      )}
      {slideIndicator && (
        <div className="gvozden-slider__indicator">
          {slideIndex + "/" + slides.length}
        </div>
      )}
    </div>
  );
}
