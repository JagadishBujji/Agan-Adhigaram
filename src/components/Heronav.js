import React from "react";
// import Vector1 from "../images/Vector1.png";
// import Vector2 from "../images/Vector2.png";
// import Vector3 from "../images/Vector3.png";
// import Vector4 from "../images/Vector4.png";
// import Vector5 from "../images/Vector5.png";
import "./HeroNavStyle.css";

function Heronav() {
  return (
    <div className="star">
      <ul>
        <li>
          <a href="#" target="_blank">
            {/* <img src={Vector1} alt="90"></img> */}
          </a>
        </li>

        <li>
          <a href="#" target="_blank">
            {/* <img src={Vector2} alt="78"></img> */}
          </a>
        </li>

        <li>
          <a href="#" target="_blank">
            {/* <img src={Vector3} alt="56"></img> */}
          </a>
        </li>

        <li>
          <a href="#" target="_blank">
            {/* <img src={Vector4} alt="34"></img> */}
          </a>
        </li>

        <li>
          <a href="#" target="_blank">
            {/* <img src={Vector5} alt="12"></img> */}
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Heronav;
