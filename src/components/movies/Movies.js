import React from "react";
import Movie from "./Movie";
import "./Movies.css"

function Movies({ movies, openPopup }) {
  return (
    <section className="movies">
      {!movies.length
        ? null
        : movies.map(movie => <Movie key={movie.imdbID} movie={movie} openPopup={openPopup} />)}
    </section>
  );
}

export default Movies;
