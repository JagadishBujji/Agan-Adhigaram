import React, { useState, useRef } from "react";

const Paati = (props) => {
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
      {/* <video
        className="paatiimg"
        ref={videoRef}
        autoPlay
        loop
        muted
        // onClick={togglePlay}
      >
        <source src="./images/Paati.mp4" type="video/mp4" />
      </video> */}
      {/* <button onClick={togglePlay}>{isPlaying ? "Pause" : "Play"}</button> */}
      <img src="./images/Paati-2.gif" alt="heroimg1" className={props.class} />
    </div>
  );
};

export default Paati;
