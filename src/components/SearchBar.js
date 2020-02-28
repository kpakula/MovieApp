import React from 'react'

function SearchBar({ handleInput, search }) {
    return (
        <section className="searchbar-wrap">
            <input type="text" placeholder="Search for a movie" className="searchbar" onChange={handleInput} onKeyPress={search}/>

        </section>
    )
}

export default SearchBar
