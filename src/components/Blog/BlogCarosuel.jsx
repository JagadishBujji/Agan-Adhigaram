import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import classes from "./BlogCarosuel.module.css";

const BlogCarosuel = () => {
  const options = {
    autoplay: true,
    autoplayHoverPause: true,
    autoplayTimeout: 3000,
    autoplaySpeed: 800,
    center: true,
    items: 1.1,
    stagePadding: 15,
    loop: true,
    margin: 15,
    animateOut: "slide-up",
    animateIn: "slide-down",
    dots: false,
    nav: true,
    navText: [
      "<i class='fa-solid fa-angle-left'></i>",
      "<i class='fa-solid fa-angle-right'></i>",
    ],
  };

  return (
    <>
      <section class={`${classes.cards}`}>
        <img
          src="./images/Ornamentblog.svg"
          alt=""
          className={classes.Ornamentblog2}
        />
        <OwlCarousel className="loop owl-carousel " {...options}>
          <div
            className={`${classes.startupcard} card startupcard row container-fluid`}
          >
            <div className={`${classes.firsthalf} col-md-6`}>
              <img src="./images/VP.jpg" alt="" className={classes.blogimg} />
            </div>
            <div className={`${classes.secondhalf} col-md-6`}>
              <div className={`${classes.author}`}>
                <img
                  src="./images/test.svg"
                  alt=""
                  className={classes.testimg}
                />
                <p>ASMITHA</p>
                <img
                  src="./images/thehindu.svg"
                  alt=""
                  className={classes.hinduimg}
                />
              </div>
              <h3 className={classes.blogtitle}>
                வாழ்க்கையில் எதனையும் நின்று கவனிக்க நேரமில்லாமல் அனைவரும்
                சென்று கொண்டிருக்கிறோம். காரணத்தைக் கேட்டால்,
              </h3>
              <p className={classes.blogcontent}>
                என ஒவ்வொருவரின் காரணங்களும் வேறுபடும். ஆனால் யாருக்காக ஓடி
                கொண்டிருக்கிறோமோ, அவர்களுடன் சற்று நேரத்தை செலவழிக்க மறுக்கிறோம்
                அல்லது மறக்கிறோம். இது போன்று என் குழந்தையுடன் நேரம் செலவழிப்பதை
                அவ்வப்பொழுது பயனுள்ளதாக மாற்றிக் கொள்ளவும் எனது வாழ்க்கையில்
                எனது கல்லூரி காலக் கட்டத்தில் அறிமுகமான புத்தகத்தின் வாசத்தை
                முடிந்த அளவு அவள் வளரும் பொழுதிலிருந்து தந்துவிடவும், சிறந்த ஒரு
                உலகிற்குள் அவளை அழைத்துச் செல்லவும் முயற்சிக்கிறேன். அதன்
                விளைவாக இது போன்று ஊடாடு (Interactive) புத்தகத்தைத் தேர்வு
                செய்தேன். “வடை போச்சே” குழந்தைகளுக்கான ஊடாடு தமிழ் புத்தகம்.
                நாம் அனைவரும் அறிந்த ஒரு கதை; பாட்டி வடை சுட்ட கதை. செம்மையான
                இக்கதையின் மறு ஆக்கமே இப்புத்தகம்.
              </p>
              <a
                target="_blank"
                href="https://chasmishwrites.blogspot.com/2022/05/tamil-book-review.html?m=1"
                className={classes.readmore}
              >
                Read More <i class="fa-solid fa-arrow-right"></i>
              </a>
            </div>
          </div>
          <div className={`${classes.startupcard} card startupcard row`}>
            <div className={`${classes.firsthalf} col-md-6`}>
              {" "}
              <img src="./images/blog.svg" alt="" className={classes.blogimg} />
            </div>
            <div className={`${classes.secondhalf} col-md-6`}>
              <div className={`${classes.author}`}>
                <img
                  src="./images/test.svg"
                  alt=""
                  className={classes.testimg}
                />
                <p>KAREN NIRUPA</p>
                <img
                  src="./images/thehindu.svg"
                  alt=""
                  className={classes.hinduimg}
                />
              </div>
              <h3 className={classes.blogtitle}>
                Agan Adhigaram presents popular stories as boardbooks with
                interactive features ideal for little fingers
              </h3>
              <p className={classes.blogcontent}>
                In this interactive book, we'll dive deep into the five
                landforms and explore everything from their unique flora and
                fauna to the occupations of the people who call them home. We'll
                even discover the delicious foods they can grow and learn about
                their vibrant cultures along with their livestock.This
                interactive book not only engages children with its sliders,
                lift-the-flap, and telephone dial mechanisms, but it also
                fosters a deeper connection to the natural world. By introducing
                these nature-related elements early on, children develop a sense
                of curiosity and interest in learning. Additionally, the last
                page of the book adds an exciting element by allowing children
                to guess the landform and its occupation based on the animal or
                bird depicted on top of the flap.
              </p>
              <a
                target="_blank"
                href="https://www.nathanreadingjourney.com/age-2-5/review-i-ஐ-by-ramya-sethuram/"
                className={classes.readmore}
              >
                Read More <i class="fa-solid fa-arrow-right"></i>
              </a>
            </div>
          </div>
          <div className={`${classes.startupcard} card startupcard row`}>
            <div className={`${classes.firsthalf} col-md-6`}>
              {" "}
              <img src="./images/blog.svg" alt="" className={classes.blogimg} />
            </div>
            <div className={`${classes.secondhalf} col-md-6`}>
              <div className={`${classes.author}`}>
                <img
                  src="./images/test.svg"
                  alt=""
                  className={classes.testimg}
                />
                <p>AKILA KANNADASAN</p>
                <img
                  src="./images/thehindu.svg"
                  alt=""
                  className={classes.hinduimg}
                />
              </div>
              <h3 className={classes.blogtitle}>
                Agan Adhigaram presents popular stories as boardbooks with
                interactive features ideal for little fingers
              </h3>
              <p className={classes.blogcontent}>
                The popular story of the grandma who sold vadai now has an
                interesting twist. Perhaps one of the most narrated, reproduced,
                and illustrated Tamil children’s stories of all time, it is now
                available as an interactive boardbook.Agan Adhigaram, a
                publishing startup by Chengalpattu-based husband-and-wife duo
                Ramya Karthikeyan and D Sethu Ram, has brought out this story
                with push, pull, and slide mechanisms aimed at helping little
                fingers develop the pincer grasp.{" "}
              </p>
              <a href="" className={classes.readmore}>
                Read More <i class="fa-solid fa-arrow-right"></i>
              </a>
            </div>
          </div>
          {/* <div className={`${classes.startupcard} card startupcard row`}>
            <div className={`${classes.firsthalf} col-md-6`}>
              {" "}
              <img src="./images/blog.svg" alt="" className={classes.blogimg} />
            </div>
            <div className={`${classes.secondhalf} col-md-6`}>
              <div className={`${classes.author}`}>
                <img
                  src="./images/test.svg"
                  alt=""
                  className={classes.testimg}
                />
                <p>AKILA KANNADASAN</p>
                <img
                  src="./images/thehindu.svg"
                  alt=""
                  className={classes.hinduimg}
                />
              </div>
              <h3 className={classes.blogtitle}>
                Agan Adhigaram presents popular stories as boardbooks with
                interactive features ideal for little fingers
              </h3>
              <p className={classes.blogcontent}>
                The popular story of the grandma who sold vadai now has an
                interesting twist. Perhaps one of the most narrated, reproduced,
                and illustrated Tamil children’s stories of all time, it is now
                available as an interactive boardbook.Agan Adhigaram, a
                publishing startup by Chengalpattu-based husband-and-wife duo
                Ramya Karthikeyan and D Sethu Ram, has brought out this story
                with push, pull, and slide mechanisms aimed at helping little
                fingers develop the pincer grasp.{" "}
              </p>
              <a href="" className={classes.readmore}>
                Read More <i class="fa-solid fa-arrow-right"></i>
              </a>
            </div>
          </div> */}
        </OwlCarousel>
        <img
          src="./images/Ornamentblog.svg"
          alt=""
          className={classes.Ornamentblog}
        />
      </section>
    </>
  );
};

export default BlogCarosuel;
