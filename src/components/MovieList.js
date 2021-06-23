import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

const MovieList = (props) => {
return(
    <>
        {props.movies.map((movie, index) =>(
            <div className="d-flex  justify-content-start m-3">
                <img src={movie.Poster} alt='movie' height='200px' />
            </div>
        ))}
    </>

);
}

export default MovieList