import React from 'react'

function SearchBar({ handleInput }) {
    return (
        <section className="searchbar-wrap">
            <input type="text" placeholder="Search for a movie" className="searchbar" onChange={handleInput}/>

        </section>
    )
}

export default SearchBar
