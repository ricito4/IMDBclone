import React, { Component } from 'react';

class Movie extends Component {

  render() {
    var movie = this.props.movie;
    return (
      <div>
        <h2>{movie.Title} {movie.Year} <img src={movie.Poster} className="App-logo" alt="logo" /></h2>

      </div>
    );
  }
}

export default Movie;
