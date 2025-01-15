/* GvozdenSlider is a custom slider made for this project */

import { useState, useEffect } from "react";
import Button from "./Button";
import "./scss/gvozdenslider.scss";
import { slide1, slide2, slide3, slide4 } from "/public/images/slider/index";
import {
  slide1mobile,
  slide2mobile,
  slide3mobile,
  slide4mobile,
} from "/public/images/slider/mobile/index";
import {
  slide1tablet,
  slide2tablet,
  slide3tablet,
  slide4tablet,
} from "/public/images/slider/tablet/index";

export default function GvozdenSlider() {
  const [width, setWidth] = useState(window.innerWidth);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, [width]);

  let slides = [];

  // Check the device resolution to serve adequate images
  if (width < 768) {
    slides = [slide1mobile, slide2mobile, slide3mobile, slide4mobile];
  } else if (width < 1024) {
    slides = [slide1tablet, slide2tablet, slide3tablet, slide4tablet];
  } else {
    slides = [slide1, slide2, slide3, slide4];
  }

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
      <link rel="preload" as="image" href={slides[0]} type="image/webp"></link>
      <div
        className="gvozden-slider__inner-wrapper"
        style={{ transitionDuration: speed + "s" }}
      >
        {slides.map((slide, index) => {
          return (
            <div key={index} className={handleSlideClasses(index)}>
              <img src={slide} alt={"Beer slide " + (index + 1)} />
            </div>
          );
        })}
      </div>
      {buttons && (
        <>
          <Button onClickFunction={prevSlide} buttonClass={"gvozden-slider__prev-button"}>&larr;</Button>
          <Button onClickFunction={nextSlide} buttonClass={"gvozden-slider__next-button"}>&rarr;</Button>
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
