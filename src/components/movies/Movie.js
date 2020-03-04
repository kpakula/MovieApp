import React from "react";

import "./Movie.css";
function Movie({ movie, openPopup }) {
  const splitTitleIfTooLong = title => {
    if (title.length > 45) return title.substring(0, 45) + "...";
    else return title;
  };

  return (
    <div
      className="col-12 col-sm-6 col-lg-4"
      onClick={() => openPopup(movie.imdbID)}
    >
      <div class="card">
        <img
          class="card-img-top"
          src={movie.Poster}
          alt={movie.Title + " cover image"}
        />
        <div class="card-body">
          <h5 class="card-title">
            {movie.Title} - {movie.Year}
          </h5>
        </div>
      </div>
    </div>
  );
}

export default Movie;
