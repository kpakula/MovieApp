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
        <img class="card-img-top" src={movie.Poster} alt={movie.Title + " cover image"} />
        <div class="card-body">
          <h5 class="card-title">{movie.Title}</h5>
          <p class="card-text text-truncate">
            This is a longer card with supporting text below as a natural
            lead-in to additional content. This content is a little bit longer.
          </p>
          <p class="card-text">
            <small class="text-muted">Last updated 3 mins ago</small>
          </p>
        </div>
      </div>

      {/* <div className="movie">
        <div className="movie-data">
        <img
          src={movie.Poster}
          alt={splitTitleIfTooLong(movie.Title) + " cover image"}
        />
        <h3>{movie.Title}</h3>
        </div>
      </div> */}
    </div>
  );
}

export default Movie;
