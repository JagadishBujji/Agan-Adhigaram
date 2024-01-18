import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./DynamicCarouselStyle.css";
import classes from "./values.module.css";
// import awardimg from './images/Awards/Child 1_KVKK'

const DynamicCarousel = () => {
  const [activeCarousel, setActiveCarousel] = useState("awards");
  const [current, setCurrent] = useState(0);

  const handleCarouselChange = (carouselNumber) => {
    setActiveCarousel(carouselNumber);
    setCurrent(0);
  };

  const awards = [
    "./images/Awards/Child 1_KVKK.jpg",
    "./images/Awards/Child 2_KvKK.jpg",
    "./images/Awards/Child 3_I_.jpg",
    "./images/Awards/Child 4_I_.jpeg",
    "./images/Awards/Child 5_VP_.jpeg",
    "./images/Awards/VPxSIMZ-18.jpg",
    "./images/Awards/VPxSIMZ-19.jpg",
    "./images/Awards/VPxSIMZ-20.jpg",
    "./images/Awards/VPxSIMZ-21.jpg",
    "./images/Awards/VPxSIMZ-22.jpg",
  ];

  const events = [
    "./images/Events/event1.jpeg",
    "./images/Events/event2.jpeg",
    "./images/Events/event3.jpeg",
    "./images/Events/event1.jpeg",
    "./images/Events/event4.jpeg",
    "./images/Events/event5.jpeg",
  ];

  const books = [
    "./images/Books/1.jpg",
    "./images/Books/2.jpg",
    "./images/Books/3.jpg",
    "./images/Books/4.jpg",
    "./images/Books/5.jpg",
    "./images/Books/6.jpg",
    "./images/Books/7.jpg",
    "./images/Books/8.jpg",
    "./images/Books/9.jpg",
    "./images/Books/10.jpg",
    "./images/Books/11.jpeg",
    "./images/Books/12.jpeg",
  ];

  const prev = (current - 1 + activeCarousel.length) % activeCarousel.length;
  const next = (current + 1) % activeCarousel.length;

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
      const shuffleArray=mobileArray.sort(()=>Math.random()-0.5)
      imagesArray = shuffleArray;
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
