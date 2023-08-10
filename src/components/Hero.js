import React from "react";
import "../style.css";
import hero_image from "../images/airbnb-experiences-collage.png";

export default function Hero() {
  return (
    <>
      <div className="hero">
        <img src={hero_image} alt="" className="hero-image" />
        <div className="hero-text">
          <h1 className="hero-h1">Online Experiences</h1>
          <p className="hero-p">
            Join unique interactive activities led by one-of-a-kind hosts—all
            without leaving home.
          </p>
        </div>
      </div>
    </>
  );
}
