import React, { Component } from 'react';
import './App.css';

import SearchBar from './components/searchbar';
import MovieList from './components/movielist';

class App extends Component {

  constructor() {
    super();
    this.state = {
      movies: []
    };
    this.updateResults = this.updateResults.bind(this);
  }

  updateResults(theseMovies) {
    this.setState({ movies: theseMovies });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src="http://www.ssbwiki.com/images/c/c2/SmashBrosSymbol.svg" className="App-logo" alt="logo" />
          <h2>IMDBATCHES</h2>
        </div>
        <p className="App-intro">Surch 4 A Moo V!</p>
         <SearchBar updateResults={this.updateResults}/>
         <MovieList movies={this.state.movies}/>
      </div>
    );
  }
}

export default App;
