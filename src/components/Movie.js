import React from 'react'

function Movie({ movie }) {
    return (
        <div className="movie">
            <img src={movie.Poster} />
            <h3>{movie.Title}</h3>
        </div>
    )
}

export default Movie
