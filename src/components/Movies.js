import React from "react";
import Movie from "./Movie";

function Movies({ movies }) {
  return (
    <section className="movies">
      {!movies.length ? null : movies.map(movie => <Movie movie={movie} />)}
    </section>
  );
}

export default Movies;
