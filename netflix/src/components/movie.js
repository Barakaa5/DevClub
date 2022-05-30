import React from "react";


function Movie(imgSrc) { ////////////////change
  return <div className="d-flex justify-content-start m-3" id="movie">
    <img src={imgSrc} alt="imgSrc" />
  </div>;
}

export default Movie;
