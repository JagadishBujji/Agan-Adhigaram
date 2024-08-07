import React, { useState, useRef } from "react";

const VideoBanner = () => {
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
      <video
        class="mainimage"
        ref={videoRef}
        autoPlay
        loop
        muted
        // onClick={togglePlay}
      >
        <source
          src="./images/Website-illustration-Edited-New.mp4"
          type="video/mp4"
        />
        {/* <source
          src="./images/Website illustration Edited New.webm"
          type="video/webm"
        /> */}
      </video>
      {/* <button onClick={togglePlay}>{isPlaying ? "Pause" : "Play"}</button> */}
    </div>
  );
};

export default VideoBanner;
