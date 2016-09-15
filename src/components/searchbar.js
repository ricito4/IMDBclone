import React, { Component } from 'react';

class SearchBar extends Component {

    constructor() {
      super()
      this.handleSubmit= this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
      e.preventDefault();
      var something = this;
      var title = something.refs.movieTitle.value
      var url = "http://www.omdbapi.com/?s=" + title
      fetch(url, {
        method: "get"
      }).then(function(response) {
        return response.json();
      }).then(function(json) {
        something.props.updateResults(json.Search);
      });
    }
    render() {
      return (
      <div id="form">
        <form id="the-form" onSubmit={this.handleSubmit}>
          <input type="text" ref="movieTitle" name="movie-title"/><br></br>
          <input type="submit" value="Submit"/>
        </form>
      </div>
      );
    }
}

export default SearchBar;
