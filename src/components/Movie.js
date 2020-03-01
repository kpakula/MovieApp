import React from 'react'

function Movie({ movie }) {
    return (
        <div className="movie">
            <img src={movie.Poster} alt={movie.Title + " cover image"}/>
            <h3>{movie.Title}</h3>
        </div>
    )
}

export default Movie
