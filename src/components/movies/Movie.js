import React from 'react'

import './Movie.css'
function Movie({ movie, openPopup }) {
    return (
        <div className="col-12 col-sm-6 col-lg-4 movie" onClick={() => openPopup(movie.imdbID)}>
            <img src={movie.Poster} alt={movie.Title + " cover image"}/>
            <h3>{movie.Title}</h3>
        </div>
    )
}

export default Movie
