import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./People.css";

const People = () => {
  const options = {
    autoplay: true,
    autoplayHoverPause: true,
    autoplayTimeout: 3000,
    autoplaySpeed: 800,
    center: true,
    items: 1.4,
    stagePadding: 15,
    loop: true,
    margin: 15,
    animateOut: "slide-up",
    animateIn: "slide-down",
    dots: false,
    nav: true,
  };

  return (
    <>
      <div className="row container peopleheading">
        <div className="heading">
          <span className="sparakel">
            <img src="./images/author.svg" alt="" />
          </span>
          <h1>People talk about us</h1>
        </div>
        <p>Their experience throughout every platform</p>
      </div>

      <section class="cards">
        {/* <div class="owl-wrapper"> */}
        {/* <div class="loop owl-carousel owl-theme"> */}
        <OwlCarousel className="loop owl-carousel" {...options}>
          <article class="card peopelcard">
            <div>
              <i class="fa-solid fa-quote-left"></i>
            </div>

            <div class="card__content">
              <p>
                Lorem ipsum dolor sit amet consectet piscing elit, sed do
                eiusmod tempor incidi ut labore et dolore magna aliqua.{" "}
              </p>
            </div>
            <div className="name">
              <img src="./images/avatar.svg" alt="" className="avatar" />
              <p>pavi lovegood,</p>
              <img src="./images/spotify.svg" alt="" className="spofity" />
            </div>
          </article>

          <article class="card peopelcard">
            <div>
              <i class="fa-solid fa-quote-left"></i>
            </div>
            <div class="card__content">
              <p>
                Lorem ipsum dolor sit amet consectet piscing elit, sed do
                eiusmod tempor incidi ut labore et dolore magna aliqua.{" "}
              </p>
            </div>
            <div className="name peopelcard">
              <img src="./images/avatar.svg" alt="" className="avatar" />
              <p>anbu lovegood,</p>
              <img src="./images/spotify.svg" alt="" className="spofity" />
            </div>
          </article>

          <article class="card peopelcard">
            <div>
              <i class="fa-solid fa-quote-left"></i>
            </div>
            <div class="card__content">
              <p>
                Lorem ipsum dolor sit amet consectet piscing elit, sed do
                eiusmod tempor incidi ut labore et dolore magna aliqua.{" "}
              </p>
            </div>
            <div className="name">
              <img src="./images/avatar.svg" alt="" className="avatar" />
              <p>sanja lovegood,</p>
              <img src="./images/spotify.svg" alt="" className="spofity" />
            </div>
          </article>

          <article class="card peopelcard">
            <div>
              <i class="fa-solid fa-quote-left"></i>
            </div>
            <div class="card__content">
              <p>
                Lorem ipsum dolor sit amet consectet piscing elit, sed do
                eiusmod tempor incidi ut labore et dolore magna aliqua.{" "}
              </p>
            </div>
            <div className="name">
              <img src="./images/avatar.svg" alt="" className="avatar" />
              <p>jagad lovegood,</p>
              <img src="./images/spotify.svg" alt="" className="spofity" />
            </div>
          </article>
        </OwlCarousel>
        {/* </div> */}
        {/* </div> */}
      </section>
    </>
  );
};

export default People;
