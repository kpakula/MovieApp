import React from "react";
import Movie from "./Movie";
import "./Movies.css";

function Movies({ movies, openPopup }) {
  return (
      <div className="container-fluid text-center movies">
        <div class="row justify-content-center">
          {!movies.length
            ? null
            : movies.map(movie => (
                <Movie key={movie.imdbID} movie={movie} openPopup={openPopup} />
              ))}
        </div>
      </div>
  );
}

export default Movies;
