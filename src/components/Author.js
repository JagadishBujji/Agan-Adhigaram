import React from "react";
import "./Author.css";

const Author = () => {
  return <>
    <div className="author-overall">
      <div>
        <span>
          <img className="author" src="./images/author.svg" alt="My Image" />
        </span>

        <h1 className="one">Authors and Illustrators</h1>
      </div>
      <p className="two">
        Meet the magic-makers behind our children's stories
        <br /> and vibrant illustrations!
      </p>

      <div className="container">
        <div className="row">
          <div className="col-sm">
            <h1 className="vai">Vaishali BK</h1>
            <p>Author</p>
            <div className="card">
              <div className="card-content">
                <p>
                  This is some card content that will overflow when hovered.This
                  is some card content that will overflow when hovered.This is
                  some card content that will overflow when hovered.This is some
                  card content that will overflow when hovered.This is some card
                  content that will overflow when hovered.This is some card
                  content that will overflow when hovered.
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm">
            <img
              className="mushroom"
              src="./images/mushroom.svg"
              alt="My Image"
            />
          </div>
          <div className="col-sm">
            <h1 className="vai">Steffi Stanley</h1>
            <p>Illustrator</p>
            <div className="card1">
              <div className="card-content">
                <h2>Title</h2>
                <p>
                  This is some card content that will overflow when hovered.
                  This is some card content that will overflow when hovered.This
                  is some card content that will overflow when hovered.This is
                  some card content that will overflow when hovered.
                </p>
              </div>
            </div>{" "}
          </div>
        </div>

        <div className="row">
          <div className="col-sm">
            <img
              className="flower1"
              src="./images/flower1.svg"
              alt="My Image"
            />
          </div>
          <div className="col-sm">
            <h1 className="vai">
              Madurai<br></br> Rama krishanan
            </h1>
            <p>Author</p>
            <div className="card2">
              <div className="card-content">
                <p>
                  This is some card content that will overflow when hovered.This
                  is some card content that will overflow when hovered.This is
                  some card content that will overflow when hovered.This is some
                  card content that will overflow when hovered.This is some card
                  content that will overflow when hovered.This is some card
                  content that will overflow when hovered.
                </p>
              </div>
            </div>{" "}
          </div>
          <div className="col-sm">
            <img
              className="flower2"
              src="./images/flower2.svg"
              alt="My Image"
            />
          </div>
        </div>

        <div className="row">
          <div className="col-sm">
            <h1 className="vai">Ramya</h1>
            <p>Author</p>
            <div className="card3">
              <div className="card-content">
                <p>
                  This is some card content that will overflow when hovered.This
                  is some card content that will overflow when hovered.This is
                  some card content that will overflow when hovered.This is some
                  card content that will overflow when hovered.This is some card
                  content that will overflow when hovered.This is some card
                  content that will overflow when hovered.
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm">
            <img
              className="flower3"
              src="./images/flower3.svg"
              alt="My Image"
            />
          </div>
          <div className="col-sm">
            <h1 className="vai">Sethu Ram</h1>
            <p>Illustrator</p>
            <div className="card4">
              <div className="card-content">
                <h2>Title</h2>
                <p>
                  This is some card content that will overflow when hovered.
                  This is some card content that will overflow when hovered.This
                  is some card content that will overflow when hovered.This is
                  some card content that will overflow when hovered.
                </p>
              </div>
            </div>{" "}
          </div>
        </div>
      </div>
    </div>
  </>
}



export default Author;
