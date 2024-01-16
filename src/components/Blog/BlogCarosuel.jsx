import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import classes from "./BlogCarosuel.module.css";
import CompanyLogo from "./CompanyLogo";

const BlogCarosuel = () => {
  const options = {
    // autoplay: true,
    // autoplayHoverPause: true,
    // autoplayTimeout: 3000,
    // autoplaySpeed: 800,
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

  const blogs = [
    {
      name: "AKILA KANNADASAN",
      profilePic: "./images/test.svg",
      company: "./images/thehindu.svg",
      image: "./images/blog.svg",
      title:
        "Agan Adhigaram presents popular stories as boardbooks with interactive features ideal for little fingers",
      content:
        "The popular story of the grandma who sold vadai now has an interesting twist. Perhaps one of the most narrated, reproduced, and illustrated Tamil children’s stories of all time, it is now available as an interactive boardbook.Agan Adhigaram, a publishing startup by Chengalpattu-based husband-and-wife duo Ramya Karthikeyan and D Sethu Ram, has brought out this story with push, pull, and slide mechanisms aimed at helping little fingers develop the pincer grasp.",
      blogLink:
        "https://www.thehindu.com/books/interactive-tamil-boardbooks-for-children-this-publishing-startup-presents-a-quirky-take-on-popular-tales/article67036916.ece?fbclid=PAAaYmKAO7Z9pzvx-Ue9htZuWQgrBJL0uuJVMzMorco2EGugPDkYTU9PtR2Go",
    },
    {
      name: "KAREN NIRUPA",
      profilePic: "./images/karen-nirupa.jpeg",
      company: "./images/thehindu.svg",
      companyName: "Nathan Reading Journey",
      image: "./images/kadaiveethi-kalakkam.jpeg",
      title:
        "My favourite author and publisher have released their third book, and I have the privilege of reviewing it again.",
      content:
        "This is about a new book called “Kadai Veedhi Kalakalakkum” (கடை வீதி கலகலக்கும்), which tells the humorous story of a curious little girl named Kumudha. She goes to the market with her uncle to shop for the items listed by her mother, but the trip quickly turns into chaos and confusion due to Kumudha’s antics. In the end, witness how her contagious happiness transforms chaos into a market full of beaming faces, leaving everyone joyfully caught in her whirlwind of wonder. Discover the secret of her contagious happiness by grabbing this beautiful board book. A hint of her happiness is on the title page.",
      blogLink:
        "https://www.nathanreadingjourney.com/indian-author/review-kadai-veedhi-kalakalakkum-%E0%AE%95%E0%AE%9F%E0%AF%88-%E0%AE%B5%E0%AF%80%E0%AE%A4%E0%AE%BF-%E0%AE%95%E0%AE%B2%E0%AE%95%E0%AE%B2%E0%AE%95%E0%AF%8D%E0%AE%95%E0%AF%81%E0%AE%AE%E0%AF%8D-by-ramya/",
    },
    {
      name: "KAREN NIRUPA",
      profilePic: "./images/karen-nirupa.jpeg",
      company: "./images/thehindu.svg",
      companyName: "Nathan Reading Journey",
      image: "./images/i-book.jpeg",
      title:
        "Tamil Nadu, a state rich in history and natural beauty, is home to a diverse range of landforms that have shaped its landscape over centuries.",
      content:
        "From majestic mountains to serene coastal plains, Tamil Nadu offers a captivating blend of geographical wonders. In this book, we are presented with a unique opportunity to delve into the landforms that have existed since the Sangam era, providing us with a glimpse into the ancient geography of this region. Did you know that the oldest Sangam literature mentions five beautiful landscapes? They are called Kurinji, Mullai, Marudham, Neithal, and Palai (ஐந்திணை வகைகள் குறிஞ்சி, முல்லை, மருதம் ,நெய்தல், பாலை). These landscapes hold great significance in Tamil culture and have been depicted in various poems and literary works.",
      blogLink:
        "https://www.nathanreadingjourney.com/age-2-5/review-i-ஐ-by-ramya-sethuram/",
    },
    {
      name: "ASMITHA",
      profilePic: "https://ui-avatars.com/api/?name=Asmitha&&length=1",
      company: "./images/thehindu.svg",
      companyName: "Chasmish",
      image: "./images/VP.jpg",
      title:
        "வாழ்க்கையில் எதனையும் நின்று கவனிக்க நேரமில்லாமல் அனைவரும் சென்று கொண்டிருக்கிறோம். காரணத்தைக் கேட்டால்,",
      content:
        "என ஒவ்வொருவரின் காரணங்களும் வேறுபடும். ஆனால் யாருக்காக ஓடி கொண்டிருக்கிறோமோ, அவர்களுடன் சற்று நேரத்தை செலவழிக்க மறுக்கிறோம் அல்லது மறக்கிறோம். இது போன்று என் குழந்தையுடன் நேரம் செலவழிப்பதை அவ்வப்பொழுது பயனுள்ளதாக மாற்றிக் கொள்ளவும் எனது வாழ்க்கையில் எனது கல்லூரி காலக் கட்டத்தில் அறிமுகமான புத்தகத்தின் வாசத்தை முடிந்த அளவு அவள் வளரும் பொழுதிலிருந்து தந்துவிடவும், சிறந்த ஒரு உலகிற்குள் அவளை அழைத்துச் செல்லவும் முயற்சிக்கிறேன். அதன் விளைவாக இது போன்று ஊடாடு (Interactive) புத்தகத்தைத் தேர்வு செய்தேன். “வடை போச்சே” குழந்தைகளுக்கான ஊடாடு தமிழ் புத்தகம். நாம் அனைவரும் அறிந்த ஒரு கதை; பாட்டி வடை சுட்ட கதை. செம்மையான இக்கதையின் மறு ஆக்கமே இப்புத்தகம்.",
      blogLink:
        "https://chasmishwrites.blogspot.com/2022/05/tamil-book-review.html?m=1",
    },
  ];

  return (
    <>
      <section class={`${classes.cards}`}>
        <img
          src="./images/Ornamentblog.svg"
          alt=""
          className={classes.Ornamentblog2}
        />
        <OwlCarousel className="loop owl-carousel " {...options}>
          {blogs.map((blog, i) => (
            <div
              className={`${classes.startupcard} card startupcard row container-fluid`}
            >
              <div className={`${classes.firsthalf} col-md-6`}>
                <img src={blog.image} alt="" className={classes.blogimg} />
              </div>
              <div className={`${classes.secondhalf} col-md-6`}>
                <div className={`${classes.author}`}>
                  <img
                    src={blog.profilePic}
                    alt={blog.name}
                    className={classes.testimg}
                  />
                  <p>{blog.name}</p>
                  {blog?.companyName ? (
                    <CompanyLogo name={blog?.companyName} />
                  ) : (
                    <img
                      src={blog.company}
                      alt={blog.company}
                      className={classes.hinduimg}
                    />
                  )}
                </div>
                <h3 className={classes.blogtitle}>{blog.title}</h3>
                <p className={classes.blogcontent}>{blog.content}</p>
                <a
                  target="_blank"
                  href={blog.blogLink}
                  className={classes.readmore}
                  rel="noreferrer"
                >
                  Read More <i class="fa-solid fa-arrow-right"></i>
                </a>
              </div>
            </div>
          ))}

          {/* <div
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
          </div> */}
          {/* <div className={`${classes.startupcard} card startupcard row`}>
            <div className={`${classes.firsthalf} col-md-6`}>
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
          </div> */}
          {/* <div className={`${classes.startupcard} card startupcard row`}>
            <div className={`${classes.firsthalf} col-md-6`}>
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
