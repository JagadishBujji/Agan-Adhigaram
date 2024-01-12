import React, { useState, useRef } from "react";

const Crow = () => {
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
    <div style={{ position: "relative", bottom: "-70px" }}>
      <video
        ref={videoRef}
        autoPlay
        loop
        style={{
          width: "500px",
          height: "500px",
        }}
        muted
        playsinline
        // onClick={togglePlay}
      >
        <source src="./images/Crow.webm" type="video/webm" />
      </video>
      {/* <button onClick={togglePlay}>{isPlaying ? "Pause" : "Play"}</button> */}
    </div>
  );
};

export default Crow;
