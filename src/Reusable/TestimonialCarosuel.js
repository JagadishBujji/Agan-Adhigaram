import React, { useState } from "react";
import "./TestimonialCarosuel.css"; // Import your CSS file

const TestimonialCarousel = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(3); // Initially, the third testimonial is active (1-based index).

  const testimonials = [
    {
      // author: "Princy, Web Developer",
      desc: "Tamil publishing startup Agan Adhigaram presents popular stories as Board books, with interactive features such as sliders and flaps designed for little hands.",
      company: "The Hindu",
    },
    {
      author: "Ms. Asmitha",
      desc: "“இதுபோன்று ஊடாடு (Interactive) புத்தகங்களை மிகச் சிறு வயதிலேயே குழந்தைங்களுக்கு அறிமுகப்படுத்தலாமா எனத் தயங்கி நிற்பவர்களுக்கும் பரிந்துரைக்கிறேன்”",
      // company: "The English",
    },
    {
      author: "Ms. Karen, Nathan_reading_journey",
      desc: "This book is a standalone to other stories because of the twist in the end. The last page in this interactive book was very clever and Nathan didn't expect the wheel mechanism to give a twist in the story. Also, get this book and introduce them to thirukkural.",
      // company: "The France",
    },
    {
      author: "Ms. Suganya kumar",
      desc: "It is one of a kind that I have seen in my language. There are not many interactive books like this. It's such a great initiative from Agan Adhigaram. I am truly inspired by your venture into bringing Tamizh our mudhan mozhi to the forefront.",
      // company: "The Manoj",
    },
    {
      author: "Chittu kuruvi books",
      desc: "An interactive board book that is breaking barriers with its creative pull the tab & turn the gear features. Vada Poche provides a modern take on a classic Tamil fable.",
      // company: "The Kumar",
    },
    {
      author: "Ms.Vanitha",
      desc: "I absolutely love the book. I am SO happy to see an interactive Tamil children's book of great quality and cute, attractive illustrations. And there is a clever twist to the story at the end as well.",
      // company: "The Kumar",
    },
    {
      author: "Ms. Nangai",
      desc: "After a long search, ended up getting this amazing book in tamil, penning down the beauty of tamil literature in a picturesque way. My toddler loved the front cover page and colourful details in it. It’s worth buy.",
      // company: "The Kumar",
    },
    {
      author: "Mr. Silambaran",
      desc: "Very Colourful Potrayal of Five Landscapes of Tamil regions in an Interactive way for Kids and few Adults as well. This clearly depicts the Landscapes, People, Culture, Work, Animals, Birds, etc. My daughter was delighted to have it. Especially after 'Vada Poche', this book is so satisfying. Will be watching this space for more such books from Agan Adhigaram publications.",
      // company: "The Kumar",
    },
    {
      author: "Ms. Nivedha",
      desc: "Very Colourful Potrayal of Five Landscapes of Tamil regions in an Interactive way for Kids and few Adults as well. This clearly depicts the Landscapes, People, Culture, Work, Animals, Birds, etc. My daughter was delighted to have it. Especially after 'Vada Poche', this book is so satisfying. Will be watching this space for more such books from Agan Adhigaram publications.",
      // company: "The Kumar",
    },
  ];

  const handleTestimonialChange = (index) => {
    setActiveTestimonial(index);
  };

  const goToPreviousTestimonial = () => {
    const previousIndex = activeTestimonial > 1 ? activeTestimonial - 1 : 5;
    setActiveTestimonial(previousIndex);
  };

  const goToNextTestimonial = () => {
    const nextIndex = activeTestimonial < 5 ? activeTestimonial + 1 : 1;
    setActiveTestimonial(nextIndex);
  };

  return (
    <div className="slider">
      {testimonials.map((testi, i) => (
        <input
          type="radio"
          name="testimonial"
          id={`t-${i + 1}`}
          checked={activeTestimonial === i + 1}
          onChange={() => handleTestimonialChange(i + 1)}
          key={`t-${i + 1}`}
        />
      ))}

      <div className="testimonials">
        {/* {Array.from({ length: 5 }, (_, i) => ( */}
        {testimonials.map((testi, i) => (
          <label
            className={`item ${activeTestimonial === i + 1 ? "active" : ""}`}
            htmlFor={`t-${i + 1}`}
            key={`testimonial-${i}`}
          >
            <p>{testi.desc}</p>
            <h2>{testi.author}</h2>
            <h2>{testi.company}</h2>
            {/* <img src="https://dummyimage.com/150" alt="picture" /> */}
          </label>
        ))}
      </div>
      <button className="arrow previous" onClick={goToPreviousTestimonial}>
        <i className="fa-solid fa-arrow-left"></i>
      </button>
      <button className="arrow next" onClick={goToNextTestimonial}>
        <i className="fa-solid fa-arrow-right"></i>
      </button>
    </div>
  );
};

export default TestimonialCarousel;
