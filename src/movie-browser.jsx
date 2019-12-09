import React, { Component } from "react";
import MovieCard from "./movie-card";
import { MovieConsumer } from "./context";
import Stars from "./stars";

class Browser extends Component {
  state = {
    searchBar: ""
  };
  render() {
    return (
      <div className="container w-100 mx-auto">
        <div className="row justify-content-md-center">
          <div className="col-7 mx-auto">
            <form className="form-inline md-form form-sm active-cyan-2 mt-2">
              <input
                className="form-control form-control-sm mr-3 w-75"
                type="text"
                placeholder="Search"
                aria-label="Search"
                onChange={e => {
                  this.setState({ searchBar: e.target.value });
                }}
              />
              <i className="fas fa-search" aria-hidden="true" />
            </form>
          </div>
          <MovieConsumer>
            {value => (
              <div className="col-auto  ratesBg">
                <Stars starsNumber={value.state.idRate} order={true} />
              </div>
            )}
          </MovieConsumer>
        </div>

        <MovieConsumer>
          {value => {
            const cards = [];
            let secondValue = value.state.movies.filter(el => {
              return (
                el.stars >= value.state.idRate &&
                el.name.search(this.state.searchBar) !== -1
              );
            });
            for (let i = 0; i < secondValue.length; i++) {
              cards.push(
                <MovieCard
                  img={secondValue[i].img}
                  title={secondValue[i].name}
                  stars={secondValue[i].stars}
                />
              );
            }
            return (
              <div className="row mt-5 mx-auto">
                <div className="col-12 cardStyle"> {cards} </div>
              </div>
            );
          }}
        </MovieConsumer>
      </div>
    );
  }
}

export default Browser;
