import React from "react";
import Movie from "./Movie";
import "./Movies.css";

function Movies({ movies, openPopup }) {
  return (
    <section className="movies">
      <div className="container-fluid text-center">
        <div class="row">
          <div class="col-12 col-sm-6 col-lg-4">One of three columns</div>
          <div class="col-12 col-sm-6 col-lg-4">One of three columns</div>
          <div class="col-12 col-sm-6 col-lg-4">One of three columns</div>
        </div>
      </div>
      {!movies.length
        ? null
        : movies.map(movie => (
            <Movie key={movie.imdbID} movie={movie} openPopup={openPopup} />
          ))}
    </section>
  );
}

export default Movies;
