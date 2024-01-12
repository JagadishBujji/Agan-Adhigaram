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
    <div >
      <video
        className="paatiimg"
        ref={videoRef}
        autoPlay
        loop
        muted
        // onClick={togglePlay}
      >
        <source src="./images/fox_payment_success.webm" type="video/webm" />
      </video>
      {/* <button onClick={togglePlay}>{isPlaying ? "Pause" : "Play"}</button> */}
    </div>
  );
};

export default PaymentSuccess;
