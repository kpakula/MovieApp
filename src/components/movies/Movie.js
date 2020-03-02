import React from 'react'

import './Movie.css'
function Movie({ movie, openPopup }) {
    return (
        <div className="movie" onClick={() => openPopup(movie.imdbID)}>
            <img src={movie.Poster} alt={movie.Title + " cover image"}/>
            <h3>{movie.Title}</h3>
        </div>
    )
}

export default Movie
