import React from "react";
import "../style.css";
import nav_image from "../images/airbnb-1.png";

export default function Navbar() {
  return (
    <>
      <nav className="navbar">
        <img src={nav_image} alt="nav-icon" className="nav-image" />
      </nav>
    </>
  );
}
