import React from "react";

import "./Movie.css";
function Movie({ movie, openPopup }) {
  const splitTitleIfTooLong = title => {
    if (title.length > 45) return title.substring(0, 45) + "...";
    else return title;
  };

  const checkImageIsExist = (poster) => {
    if(poster === "N/A") {
      return defaultImage
    } else {
      return poster
    }
  }

  const defaultImage = "https://images.pexels.com/photos/356079/pexels-photo-356079.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260";

  return (
    <div
      className="col-12 col-sm-6 col-lg-4"
      onClick={() => openPopup(movie.imdbID)}
    >
      <div class="card">
        <img
          class="card-img-top"
          src={checkImageIsExist(movie.Poster)}
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
