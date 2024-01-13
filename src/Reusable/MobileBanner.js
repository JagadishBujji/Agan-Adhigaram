import React, { useState, useRef } from "react";

const MobileBanner = ({ fox }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

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
        className="MobileBanner"
        ref={videoRef}
        controls={false} // Hide default video controls
        loop
        muted
        style={{ width: "100%" }}
        onClick={togglePlay}
      >
        {/* <source src="./images/V5.mp4" type="video/mp4" /> */}
        <source src="./images/V5.webm" type="video/webm" />
      </video>
      {/* <button onClick={togglePlay}>{isPlaying ? "Pause" : "Play"}</button> */}
    </div>
  );
};

export default MobileBanner;
