import React from "react";
import card_text_star from "../images/star-1.png";
import "../style.css";

export default function Card(props) {
  return (
    <>
      <div className="card">
        {props.quantity >= 0 && (
          <div className="card-mode">
            <p className="card-mode-text">{props.mode}</p>
          </div>
        )}
        <img
          src={`images/${props.coverImg}`}
          alt=""
          className="card-image"
        />
        <div className="card-text" id="card-text-1">
          <img src={card_text_star} alt="" className="card-text-star" />
          <p className="card-text-rating">
            {props.stats.rating}{" "}
            <span className="card-text-greytext">
              ({props.stats.reviewCount}) . {props.location}
            </span>
          </p>
        </div>
        <div className="card-text" id="card-text-2">
          <p className="card-text-title">{props.title}</p>
        </div>
        <div className="card-text" id="card-text-3">
          <p className="card-text-price">
            <span className="card-text-price-bold">From ${props.price}</span> /
            person
          </p>
        </div>
      </div>
    </>
  );
}
