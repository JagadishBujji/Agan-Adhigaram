import React, { useState } from "react";
import "./TestimonialCarosuel.css"; // Import your CSS file

const TestimonialCarousel = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(3); // Initially, the third testimonial is active (1-based index).

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
      {Array.from({ length: 5 }, (_, i) => (
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
        {Array.from({ length: 5 }, (_, i) => (
          <label
            className={`item ${activeTestimonial === i + 1 ? "active" : ""}`}
            htmlFor={`t-${i + 1}`}
            key={`testimonial-${i}`}
          >
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt.
            </p>
            <h2>Princy, Web Developer</h2>
            <h2>Book lover</h2>
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
