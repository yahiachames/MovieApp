import React, { Component } from "react";
import { MovieConsumer } from "./context";
const Stars = props => {
  const starss = [];
  for (let i = 1; i <= 5; i++) {
    if (i > props.starsNumber)
      starss.push(
        <MovieConsumer>
          {value => (
            <span
              id={i}
              key={i}
              onClick={event => {
                if (props.order === true) {
                  value.handelId(event.target.id);
                }
              }}
              className="fa fa-star bg-light"
            />
          )}
        </MovieConsumer>
      );
    else {
      starss.push(<span key={i} className="fa fa-star checked" />);
    }
  }

  return <div className="container-stars">{starss}</div>;
};

export default Stars;
