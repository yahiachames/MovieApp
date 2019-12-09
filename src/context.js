import React, { Component } from "react";
const movieContext = React.createContext();
class MovieProvider extends Component {
  state = {
    movies: [
      {
        id: 1,
        name: "matrix",
        img:
          "https://images-na.ssl-images-amazon.com/images/I/51aTgPXVFJL._SY355_.jpg",
        stars: 1
      },
      {
        id: 2,
        name: "life",
        img:
          "http://fr.web.img2.acsta.net/r_1280_720/pictures/17/02/15/09/25/520233.jpg",
        stars: 2
      },
      {
        id: 3,
        name: "lukas",
        img:
          "http://fr.web.img6.acsta.net/r_1280_720/pictures/18/07/02/09/55/5510870.jpg",
        stars: 3
      },
      {
        id: 4,
        name: "Titanic",
        img:
          "https://media3.woopic.com/api/v1/images/174%2Fcinemovies%2F8a4%2F16e%2F3dcb60c49b91911e107850c4ee%2Fmovies-5818-1.jpg?format=822x700&quality=85",
        stars: 4
      },
      {
        id: 5,
        name: "The Rain",
        img:
          "https://www.scifi-movies.com/images/contenu/data/0004841/affiche-the-rain-2018-2.jpg",
        stars: 5
      }
    ],
    idRate: 0
  };
  getId = k => {
    let rate = 0;
    rate = k;

    this.setState(() => {
      return { idRate: rate };
    });
  };
  render() {
    return (
      <movieContext.Provider
        value={{ state: this.state, handelId: this.getId }}
      >
        {" "}
        {this.props.children}{" "}
      </movieContext.Provider>
    );
  }
}
const MovieConsumer = movieContext.Consumer;
export { MovieProvider, MovieConsumer };
