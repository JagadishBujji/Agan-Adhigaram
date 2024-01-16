import React, { useState, useRef } from "react";

const Dragonfly = () => {
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
        class="dragon"
        ref={videoRef}
        autoPlay
        loop
        muted
        // onClick={togglePlay}
      >
        {/* <source src="./images/Dragonfly.webm" type="video/webm" /> */}
        <source src="./images/Dragonfly.mp4" type="video/mp4" />
      </video>
      {/* <button onClick={togglePlay}>{isPlaying ? "Pause" : "Play"}</button> */}
    </div>
  );
};

export default Dragonfly;
