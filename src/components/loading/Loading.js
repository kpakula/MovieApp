import React from 'react';
import ReactLoading from 'react-loading';

import Movies from '../movies/Movies';


function Loading({ status, movies }) {

    return (
        <div>
            {!status ? (
                <ReactLoading type={"bars"} color={"white"} />
            ): (
                <Movies movies={movies} />
            )}
        </div>
    )
}

export default Loading;