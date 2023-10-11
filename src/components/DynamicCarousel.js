import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./DynamicCarouselStyle.css";

const DynamicCarousel = () => {
  const [activeCarousel, setActiveCarousel] = useState(1);
  const [current, setCurrent] = useState(0);
  const [imageSequence, setImageSequence] = useState([0, 1, 2]);

  const handleCarouselChange = (carouselNumber) => {
    setActiveCarousel(carouselNumber);
  };

  const images = [
    "./images/gallery1.svg",
    "./images/gallery2.svg",
    "./images/gallery3.svg",
    "./images/gallery1.svg",
    "./images/gallery2.svg",
    "./images/gallery3.svg",
    "./images/gallery1.svg",
    "./images/gallery2.svg",
    "./images/gallery3.svg",
    "",
  ];
  const prev = (current + 2) % 3;
  const next = (current + 1) % 3;
  const goToPrev = () => {
    setCurrent(prev);
    rotateImages();
  };

  const goToNext = () => {
    setCurrent(next);
    rotateImages();
  };
  const rotateImages = () => {
    setImageSequence((prevSequence) => {
      const newSequence = [prevSequence[1], prevSequence[2], prevSequence[0]];
      return newSequence;
    });
  };

  const renderCarousel = (carouselNumber) => {
    let startIndex, endIndex;
    let carouselInterval = null;

    if (carouselNumber === 1) {
      startIndex = 0;
      endIndex = startIndex + 3;

      carouselInterval = 5000;
    } else {
      startIndex = (carouselNumber - 1) * 3;
      endIndex = startIndex + 3;
    }

    const slicedImages = images.slice(
      startIndex,
      Math.min(endIndex, images.length)
    );

    return (
      <>
        <div className="items">
          {slicedImages.map((image, index) => (
            <div
              key={index}
              className={`item ${index === current ? "active" : ""} ${
                index === prev ? "prev" : ""
              } ${index === next ? "next" : ""} `}
            >
              <img
                src={image}
                className="d-block "
                alt={`Image ${startIndex + index + 1}`}
              />
            </div>
          ))}

          <div className="button-container">
            <div className="button" onClick={goToNext}>
              <i class="fa-solid fa-angle-left"></i>
            </div>
            <div className="button" onClick={goToPrev}>
              <i class="fa-solid fa-angle-right"></i>
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <div className="overallcarosuel">
        <div className="gallerycapturing">
          <h1>Gallery</h1>
          <p>Capturing our happiest book-making memories.</p>
        </div>

        <div>{renderCarousel(activeCarousel)}</div>
        <div className="demo1">
          <img
            onClick={() => handleCarouselChange(1)}
            src="/images/awards.jpg"
            className="gallery"
          />

          <img
            onClick={() => handleCarouselChange(2)}
            src="/images/events.jpg"
            className="gallery"
          />

          <img
            onClick={() => handleCarouselChange(3)}
            src="/images/books.jpg"
            className="gallery"
          />
        </div>
        <a href="" className="Grap">
          Grab Yours
        </a>
      </div>
    </>
  );
};

export default DynamicCarousel;
