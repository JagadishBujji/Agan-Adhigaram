import React, { useState, useRef } from "react";

const MobileBanner = ({ fox }) => {
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
    <div className="mobilebanner">
      <video
        className={MobileBanner}
        ref={videoRef}
        autoPlay
        loop
        muted
        // onClick={togglePlay}
      >
        <source src="./images/mobilebanner.webm" type="video/webm" />
      </video>
      {/* <button onClick={togglePlay}>{isPlaying ? "Pause" : "Play"}</button> */}
    </div>
  );
};

export default MobileBanner;
