import React, { useState, useRef } from "react";

const Butterfly = () => {
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
        className="Butterfly"
        background="transparent"
        ref={videoRef}
        autoPlay
        loop
        muted
        // onClick={togglePlay}
      >
        {/* <source src="./images/Butterfly.webm" type="video/webm" /> */}
        <source src="./images/Butterfly.mp4" type="video/mp4" />
      </video>
      {/* <button onClick={togglePlay}>{isPlaying ? "Pause" : "Play"}</button> */}
    </div>
  );
};

export default Butterfly;
