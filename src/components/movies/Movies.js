import React from "react";
import Movie from "./Movie";
import "./Movies.css"

function Movies({ movies }) {
  return (
    <section className="movies">
      {!movies.length
        ? null
        : movies.map(movie => <Movie key={movie.imdbID} movie={movie} />)}
    </section>
  );
}

export default Movies;
