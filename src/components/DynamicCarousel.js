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
    // "./images/awards1.png",
    "./images/awards2.png",
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
    "./images/events1.jpeg",
    // "./images/events2.jpeg",
    "./images/I.png",
    "./images/event4.png",
    "./images/event5.png",
    "./images/event6.png",
    "./images/VPxSIMZ-3.jpg",
    "./images/VPxSIMZ-18.jpg",
    "./images/ibook.png",
    "./images/gallery3.svg",
  ];

  const books = [
    "./images/book1.jpg",
    "./images/book2.jpg",
    "./images/book3.jpg",
    "./images/book4.jpg",
    "./images/book5.jpg",
    "./images/book6.jpg",
    "./images/book7.jpg",
    "./images/book8.jpg",
    "./images/ibook.png",
    "./images/vadai.jpeg",
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

    if (window.innerWidth < 767) {
      let mobileArray = awards.concat(events, books);
      imagesArray = mobileArray;
    } else {
      if (type === "awards") {
        imagesArray = awards;
      } else if (type === "events") {
        imagesArray = events;
      } else {
        imagesArray = books;
      }
    }

    const prevIndex = (current - 1 + imagesArray.length) % imagesArray.length;
    const nextIndex = (current + 1) % imagesArray.length;

    ui = imagesArray.map((image, index) => (
      <div
        key={index}
        className={`item ${index === current ? "active" : ""} ${
          index === prevIndex ? "prev" : ""
        } ${index === nextIndex ? "next" : ""} `}
        id="gallery"
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
          <div
            className="awards"
            onClick={() => handleCarouselChange("awards")}
          >
            <p className="contentawards">Awards</p>
          </div>
          <div
            className="events"
            onClick={() => handleCarouselChange("events")}
          >
            <p className="contentawards2">Events</p>
          </div>
          <div className="books" onClick={() => handleCarouselChange("books")}>
            <p className="contentawards3">Books</p>
          </div>
          {/* <img
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
          /> */}
        </div>
        <a href="books" className="Grap">
          Grab Yours
        </a>
      </div>
    </>
  );
};

export default DynamicCarousel;
