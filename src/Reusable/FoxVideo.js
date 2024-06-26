import React, { useState, useRef } from "react";

const FoxVideo = () => {
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
        class="fox"
        ref={videoRef}
        autoPlay
        loop
        muted
        // onClick={togglePlay}
      >
        <source src="./images/Fox Cring.webm" type="video/webm" />
      </video> */}
      {/* <button onClick={togglePlay}>{isPlaying ? "Pause" : "Play"}</button> */}
      <img src="./images/Fox-Cring.gif" alt="fox-crying" className="fox" />
    </div>
  );
};

export default FoxVideo;
