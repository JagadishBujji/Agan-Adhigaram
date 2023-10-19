import React, { Component } from "react";
import Slider from "react-slick";
import classes from "./MayCarosuel.module.css";

export default class MayCarosuel extends Component {
  render() {
    const settings = {
      autoplay: true,
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      arrow: true,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          },
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrow: false,
            nextArrow: false,
            prevArrow: false,
          },
        },
      ],
    };

    function SampleNextArrow(props) {
      const { className, style, onClick } = props;
      return (
        <div
          className={className}
          style={{
            ...style,
            display: "block",
            background: "#000",
            borderRadius: "50%",
          }}
          onClick={onClick}
        />
      );
    }

    function SamplePrevArrow(props) {
      const { className, style, onClick } = props;
      return (
        <div
          className={className}
          style={{
            ...style,
            display: "block",
            background: "#000",
            borderRadius: "50%",
          }}
          onClick={onClick}
        />
      );
    }

    const isMobile = window.innerWidth <= 767;
    return (
      <div className={`${classes.carosuelslider} container`}>
        <Slider {...settings}>
          <div>
            <div className="row">
              <div className={`${classes.carosuelcardimage} col-6`}>
                <img
                  src="./images/vadai.png"
                  alt=" "
                  className={`${classes.caroimg}`}
                />
              </div>
              <div className={`${classes.carosuelcardcontent} col-6`}>
                <h4 className={classes.humorous}>Humorous</h4>
                <p className={classes.namevadai}>Vadai Pochae</p>
                <p className={classes.ram}>Ramya - Sethu Ram</p>
                <p className={classes.amount}>
                  ₹ 499 <span className={classes.strickout}>₹599</span>
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="row">
              <div className={`${classes.carosuelcardimage} col-6`}>
                <img
                  src="./images/vadai.png"
                  alt=" "
                  className={`${classes.caroimg}`}
                />
              </div>
              <div className={`${classes.carosuelcardcontent} col-6`}>
                <h4 className={classes.humorous}>Humorous</h4>
                <p className={classes.namevadai}>Vadai Pochae</p>
                <p className={classes.ram}>Ramya - Sethu Ram</p>
                <p className={classes.amount}>
                  ₹ 499 <span className={classes.strickout}>₹599</span>
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="row">
              <div className={`${classes.carosuelcardimage} col-6`}>
                <img
                  src="./images/vadai.png"
                  alt=" "
                  className={`${classes.caroimg}`}
                />
              </div>
              <div className={`${classes.carosuelcardcontent} col-6`}>
                <h4 className={classes.humorous}>Humorous</h4>
                <p className={classes.namevadai}>Vadai Pochae</p>
                <p className={classes.ram}>Ramya - Sethu Ram</p>
                <p className={classes.amount}>
                  ₹ 499 <span className={classes.strickout}>₹599</span>
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="row">
              <div className={`${classes.carosuelcardimage} col-6`}>
                <img
                  src="./images/vadai.png"
                  alt=" "
                  className={`${classes.caroimg}`}
                />
              </div>
              <div className={`${classes.carosuelcardcontent} col-6`}>
                <h4 className={classes.humorous}>Humorous</h4>
                <p className={classes.namevadai}>Vadai Pochae</p>
                <p className={classes.ram}>Ramya - Sethu Ram</p>
                <p className={classes.amount}>
                  ₹ 499 <span className={classes.strickout}>₹599</span>
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="row">
              <div className={`${classes.carosuelcardimage} col-6`}>
                <img
                  src="./images/vadai.png"
                  alt=" "
                  className={`${classes.caroimg}`}
                />
              </div>
              <div className={`${classes.carosuelcardcontent} col-6`}>
                <h4 className={classes.humorous}>Humorous</h4>
                <p className={classes.namevadai}>Vadai Pochae</p>
                <p className={classes.ram}>Ramya - Sethu Ram</p>
                <p className={classes.amount}>
                  ₹ 499 <span className={classes.strickout}>₹599</span>
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="row">
              <div className={`${classes.carosuelcardimage} col-6`}>
                <img
                  src="./images/vadai.png"
                  alt=" "
                  className={`${classes.caroimg}`}
                />
              </div>
              <div className={`${classes.carosuelcardcontent} col-6`}>
                <h4 className={classes.humorous}>Humorous</h4>
                <p className={classes.namevadai}>Vadai Pochae</p>
                <p className={classes.ram}>Ramya - Sethu Ram</p>
                <p className={classes.amount}>
                  ₹ 499 <span className={classes.strickout}>₹599</span>
                </p>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}
