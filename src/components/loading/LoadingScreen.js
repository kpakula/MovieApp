import React from "react";
import ReactLoading from "react-loading";
import "./LoadingScreen.css";

function LoadingScreen() {
  return (
    <div className="connection-info">
      <ReactLoading type={"bars"} color={"white"} />
    </div>
  );
}

export default LoadingScreen;
