import React from "react";

import "./Connection.css";

function Exist() {
  return (
    <div className="connection-info">
      <div className="connection-info-inner">
        <h2>This movie not exists in database :(</h2>
      </div>
    </div>
  );
}

export default Exist;
