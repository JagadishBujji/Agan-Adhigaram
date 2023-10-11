import React from "react";
import "./People.css";
import $ from "jquery";

const People = () => {
  var $owl = $(".loop");

  $owl.owlCarousel({
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
  });
  

  return (
    <>
      <div className=" row container peopleheading">
        <div className="heading">
          <span className="sparakel">
            <img src="./images/author.svg" alt="" />
          </span>
          <h1>People talk about us</h1>
        </div>
        <p>Their experience throughout every platform</p>
      </div>

      <section class="cards">
        <div class="owl-wrapper">
          <div class="loop owl-carousel owl-theme">
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
          </div>
        </div>
      </section>
    </>
  );
};

export default People;
