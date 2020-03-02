import React from 'react'

import "./Popup.css"

function Popup( { current, close }) {
    // console.log(current);
    return (
        <section className="popup">
            <div className="content">
            <h3>{current.Title}</h3> <span>{current.Year}</span>
            <p className="rating">Rating: {current.imdbRating}</p>
            <div className="plot">
                <img src={current.Poster}/>
                <p>{current.Plot}</p>
            </div>
            <button className="close" type="text" onClick={close}>...</button>
            </div>
        </section>
    )
}

export default Popup
