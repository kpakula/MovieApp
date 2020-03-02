import React, { useState } from 'react'
import FadeIn from 'react-fade-in';
import Lottie from 'react-lottie';
import ReactLoading from 'react-loading';
// import "bootstrap/dist/css/bootstrap.css";


function Loading({ status }) {
    // const [loading, setLoading] = useState(undefined)
    return (
        <div>
            {status ? (
                <ReactLoading type={"bars"} color={"white"} />
            ): (
                null
            )}
            {/* <h1>Hello World</h1> */}
        </div>
    )
}

export default Loading;