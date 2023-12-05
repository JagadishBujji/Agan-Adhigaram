import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./People.css";
import { Avatar, Rating } from "@mui/material";

const People = () => {
  const options = {
    autoplay: true,
    autoplayHoverPause: true,
    autoplayTimeout: 3000,
    autoplaySpeed: 800,
    center: true,
    items: 1.8,
    stagePadding: 5,
    loop: true,
    margin: 15,
    animateOut: "slide-up",
    animateIn: "slide-down",
    dots: false,
    nav: true,
    navText: [
      "<img  src='./images/Arrow - Left Circle.svg'>",
      "<img  src='./images/Arrow - Right Circle.svg'>",
    ],
    outerWidth: 100,
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
                Tamil publishing startup Agan Adhigaram presents popular stories
                as Board books, with interactive features such as sliders and
                flaps designed for little hands.{" "}
              </p>
            </div>
            <div className="name">
              {/* <img src="./images/avatar.svg" alt=""  /> */}
             <div className="icon" >
             <Avatar sx={{ mr: 1 }}>T</Avatar>
             <div className="">
              <p>The Hindu</p>
             </div>
             </div>
              <Rating name="read-only" value={5} readOnly style={{color:'white'}} />
            </div>
           
          </article>

          <article class="card peopelcard">
            <div>
              <i class="fa-solid fa-quote-left"></i>
            </div>
            <div class="card__content">
              <p>
                இதுபோன்று ஊடாடு (Interactive) புத்தகங்களை மிகச் சிறு வயதிலேயே
                குழந்தைங்களுக்கு அறிமுகப்படுத்தலாமா எனத் தயங்கி
                நிற்பவர்களுக்கும் பரிந்துரைக்கிறேன்”{" "}
              </p>
            </div>
            <div className="name peopelcard">
              {/* <img src="./images/avatar.svg" alt="" className="avatar" /> */}
              <div className="icon">
              <Avatar sx={{ mr: 1 }}>A</Avatar>
              <div className="nameofpeople">
                <p>Ms. Asmitha,</p>
                <p>Entrepreneur and a mother of 2 years old, Chennai </p>
               
              </div>
              </div>
              {/* <br /> */}
              <Rating name="read-only" value={5} readOnly style={{color:"white"}} />
            </div>
            
            
          </article>

          <article class="card peopelcard">
            <div>
              <i class="fa-solid fa-quote-left"></i>
            </div>
            <div class="card__content">
              <p>
                “This book is a standalone to other stories because of the twist
                in the end. The last page in this interactive book was very
                clever and Nathan didn't expect the wheel mechanism to give a
                twist in the story. Also, get this book and introduce them to
                thirukkural.”{" "}
              </p>
            </div>
            <div className="name">
              {/* <img src="./images/avatar.svg" alt="" className="avatar" /> */}
             <div className="icon">
             <Avatar sx={{ mr: 1 }}>K</Avatar>
              <div className="nameofpeople">
                <p>Ms. Karen, Nathan,</p>
                <p>Blogger and kids book reviewer, Chennai . </p>
              </div>
             </div>
              <Rating name="read-only" value={5} readOnly style={{color:'white'}} />
            </div>
          </article>

          <article class="card peopelcard">
            <div>
              <i class="fa-solid fa-quote-left"></i>
            </div>
            <div class="card__content">
              <p>
                “It is one of a kind that I have seen in my language. There are
                not many interactive books like this. It's such a great
                initiative from Agan Adhigaram. I am truly inspired by your
                venture into bringing Tamizh our mudhan mozhi to the forefront.”{" "}
              </p>
            </div>
            <div className="name">
              {/* <img src="./images/avatar.svg" alt="" className="avatar" /> */}
              <div className="icon">
              <Avatar sx={{ mr: 1 }}>S</Avatar>
              <div className="nameofpeople">
                <p>Ms. Suganya kumar,</p>
                <p>Mother, Doctor and Entrepreneur. </p>
              </div>
              </div>
              <Rating name="read-only" value={5} readOnly style={{color:'white'}} />
            </div>
          </article>
          <article class="card peopelcard">
            <div>
              <i class="fa-solid fa-quote-left"></i>
            </div>
            <div class="card__content">
              <p>
                “An interactive board book that is breaking barriers with its
                creative pull the tab & turn the gear features. Vada Poche
                provides a modern take on a classic Tamil fable.”{" "}
              </p>
            </div>
            <div className="name">
              {/* <img src="./images/avatar.svg" alt="" className="avatar" /> */}
              <div className="icon">
              <Avatar sx={{ mr: 1 }}>C</Avatar>
              <div className="nameofpeople">
                <p>Chittu kuruvi books,</p>
                <p>Bookstore, Canada</p>
              </div>
              </div>
              <Rating name="read-only" value={5} readOnly style={{color:'white'}} />
            </div>
          </article>
          <article class="card peopelcard">
            <div>
              <i class="fa-solid fa-quote-left"></i>
            </div>
            <div class="card__content">
              <p>
                “I absolutely love the book. I am SO happy to see an interactive
                Tamil children's book of great quality and cute, attractive
                illustrations. And there is a clever twist to the story at the
                end as well.”{" "}
              </p>
            </div>
            <div className="name">
              {/* <img src="./images/avatar.svg" alt="" className="avatar" /> */}
             <div className="icon">
             <Avatar sx={{ mr: 1 }}>V</Avatar>
              <div className="nameofpeople">
                <p> Ms. Vanitha,</p>
                <p>Author, Vaaranam books, Australia</p>
              </div>
             </div>
              <Rating name="read-only" value={5} readOnly style={{color:'white'}} />
            </div>
          </article>
          <article class="card peopelcard">
            <div>
              <i class="fa-solid fa-quote-left"></i>
            </div>
            <div class="card__content">
              <p>
                “After a long search, ended up getting this amazing book in
                tamil, penning down the beauty of tamil literature in a
                picturesque way. My toddler loved the front cover page and
                colourful details in it. It’s worth buy.”{" "}
              </p>
            </div>
            <div className="name">
              {/* <img src="./images/avatar.svg" alt="" className="avatar" /> */}
              <div className="icon">
              <Avatar sx={{ mr: 1 }}>N</Avatar>
              <div className="nameofpeople">
                <p> Ms. Nangai,</p>
                <p>Mother of 2.5 years old, Belgium</p>
              </div>
              </div>
              <Rating name="read-only" value={5} readOnly style={{color:'white'}} />
            </div>
          </article>
          <article class="card peopelcard">
            <div>
              <i class="fa-solid fa-quote-left"></i>
            </div>
            <div class="card__content">
              <p>
                “Very Colourful Potrayal of Five Landscapes of Tamil regions in
                an Interactive way for Kids and few Adults as well. This clearly
                depicts the Landscapes, People, Culture, Work, Animals, Birds,
                etc. My daughter was delighted to have it. Especially after
                'Vada Poche', this book is so satisfying. Will be watching this
                space for more such books from Agan Adhigaram publications.”{" "}
              </p>
            </div>
            <div className="name">
              {/* <img src="./images/avatar.svg" alt="" className="avatar" /> */}
              <div className="icon">
              <Avatar sx={{ mr: 1 }}>S</Avatar>
              <div className="nameofpeople">
                <p> Mr. Silambaran,</p>
                <p>Father of 3 years old, Chennai</p>
              </div>
              </div>
              <Rating name="read-only" value={5} readOnly style={{color:'white'}} />
            </div>
          </article>
          <article class="card peopelcard">
            <div>
              <i class="fa-solid fa-quote-left"></i>
            </div>
            <div class="card__content">
              <p>
                “Very Colourful Potrayal of Five Landscapes of Tamil regions in
                an Interactive way for Kids and few Adults as well. This clearly
                depicts the Landscapes, People, Culture, Work, Animals, Birds,
                etc. My daughter was delighted to have it. Especially after
                'Vada Poche', this book is so satisfying. Will be watching this
                space for more such books from Agan Adhigaram publications.”{" "}
              </p>
            </div>
            <div className="name">
              {/* <img src="./images/avatar.svg" alt="" className="avatar" /> */}
             <div className="icon">
             <Avatar sx={{ mr: 1 }}>N</Avatar>
              <div className="nameofpeople">
                <p> Ms. Nivedha,</p>
                <p>Doctor and mother, Ranipet</p>
              </div>
             </div>
              <Rating name="read-only" value={5} readOnly style={{color:'white'}} />
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
