import React, { useState } from 'react'
import FadeIn from 'react-fade-in';
import Lottie from 'react-lottie';
import ReactLoading from 'react-loading';
import Movies from '../Movies';


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