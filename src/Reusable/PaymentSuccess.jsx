import React, { useState, useRef } from "react";

const PaymentSuccess = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const togglePlay = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }

    setIsPlaying(!isPlaying);
  };

  return (
    <div>
      {/* <video className="payment-success-fox" ref={videoRef} autoPlay loop muted>
        <source src="./images/fox_payment_success.webm" type="video/webm" />
      </video> */}
      <img
        className="payment-success-fox"
        src="./images/fox_payment_success.gif"
        alt="payment-success-fox-dancing"
      />
      {/* <button onClick={togglePlay}>{isPlaying ? "Pause" : "Play"}</button> */}
    </div>
  );
};

export default PaymentSuccess;
