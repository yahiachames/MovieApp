import React, { Component } from "react";
import Stars from "./stars";
const movieCard = props => {
  return (
    <div className="col-3 m-3">
      <div className="card">
        <img src={props.img} alt="/" className="card-img-top" />
        <h5 className="card-title"> {props.title} </h5>
        <Stars starsNumber={props.stars} order={false} />
      </div>
    </div>
  );
};

export default movieCard;
