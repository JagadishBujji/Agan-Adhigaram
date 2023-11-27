import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./DynamicCarouselStyle.css";
import classes from "./values.module.css";

const DynamicCarousel = () => {
  const [activeCarousel, setActiveCarousel] = useState("awards");
  const [current, setCurrent] = useState(0);

  const handleCarouselChange = (carouselNumber) => {
    setActiveCarousel(carouselNumber);
    setCurrent(0);
  };

  const awards = [
    "./images/VPxSIMZ-18.jpg",
    "./images/gallery2.svg",
    "./images/gallery3.svg",
    "./images/I.png",
    "./images/vadai.jpeg",
    "./images/vadai2.jpeg",
    "./images/VPxSIMZ-3.jpg",
    "./images/ibook.png",
    "./images/gallery3.svg",
    "./images/gallery3.svg",
  ];

  const events = [
    "./images/I.png",
    "./images/gallery3.svg",
    "./images/gallery2.svg",
    "./images/gallery3.svg",
    "./images/vadai.jpeg",
    "./images/vadai2.jpeg",
    "./images/VPxSIMZ-3.jpg",
    "./images/VPxSIMZ-18.jpg",
    "./images/ibook.png",
    "./images/gallery3.svg",
  ];

  const books = [
    "./images/vadai.jpeg",
    "./images/VPxSIMZ-18.jpg",
    "./images/gallery2.svg",
    "./images/gallery3.svg",
    "./images/I.png",
    "./images/vadai2.jpeg",
    "./images/VPxSIMZ-3.jpg",
    "./images/ibook.png",
    "./images/gallery3.svg",
    "./images/gallery3.svg",
  ];
  const prev = (current - 1 + awards.length) % awards.length;
  const next = (current + 1) % awards.length;

  const goToPrev = () => {
    setCurrent(prev);
  };

  const goToNext = () => {
    setCurrent(next);
  };

  const renderCarousel = (type) => {
    let ui = null;
    let imagesArray = [];

    if (type === "awards") {
      imagesArray = awards;
    } else if (type === "events") {
      imagesArray = events;
    } else {
      imagesArray = books;
    }

    const prevIndex = (current - 1 + imagesArray.length) % imagesArray.length;
    const nextIndex = (current + 1) % imagesArray.length;

    ui = imagesArray.map((image, index) => (
      <div
        key={index}
        className={`item ${index === current ? "active" : ""} ${
          index === prevIndex ? "prev" : ""
        } ${index === nextIndex ? "next" : ""} `}
      >
        <img src={image} className="d-block " alt={image} />
      </div>
    ));

    return (
      <>
        <div className="items">
          {ui}
          <div className="button-container">
            <div className="button" onClick={goToNext}>
              <i className="fa-solid fa-angle-left left"></i>
            </div>
            <div className="button" onClick={goToPrev}>
              <i className="fa-solid fa-angle-right righticon"></i>
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <div className={classes.valuesheading}>
        <h1 className={classes.valuetitle}>Gallery</h1>
        <p className={classes.subtitle}>
          Capturing our happiest book-making memories.
        </p>
      </div>
      <div className="overallcarosuel">
        <div>{renderCarousel(activeCarousel)}</div>
        <div className="demo1">
          <img
            onClick={() => handleCarouselChange("awards")}
            src="/images/Awards.svg"
            className="gallery"
            alt="awards"
          />

          <img
            onClick={() => handleCarouselChange("events")}
            src="/images/Events.svg"
            className="gallery"
            alt="events"
          />

          <img
            onClick={() => handleCarouselChange("books")}
            src="/images/Books.svg"
            className="gallery"
            alt="books"
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
