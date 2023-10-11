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
          <article class="card">
            <div class="card__content">
              <h4 class="card__title">
                <span>Card One</span>
              </h4>
            </div>
          </article>

          <article class="card">
            <div class="card__content">
              <h4 class="card__title">
                <span>Card Two</span>
              </h4>
            </div>
          </article>

          <article class="card">
            <div class="card__content">
              <h4 class="card__title">
                <span>Card Three</span>
              </h4>
            </div>
          </article>

          <article class="card">
            <div class="card__content">
              <h4 class="card__title">
                <span>Card Four</span>
              </h4>
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
