import React, { useState, useRef } from "react";

const Fox = ({ fox }) => {
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
    <div className="foxbig">
      {/* <video
        className={fox}
        ref={videoRef}
        autoPlay
        loop
        muted
        // onClick={togglePlay}
      >
        <source src="./images/Fox 2.webm" type="video/webm" />
      </video> */}
      {/* <button onClick={togglePlay}>{isPlaying ? "Pause" : "Play"}</button> */}
      <img src="./images/Fox-2.gif" alt="Crow" className={fox} />
    </div>
  );
};

export default Fox;
