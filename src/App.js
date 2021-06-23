import "./App.css";
import React, { useEffect, useState } from "react";
import MovieList from "./components/MovieList";
import "bootstrap/dist/css/bootstrap.min.css";
import MovieListHeading from "./components/MovieListHeading";
import SearchBox from "./components/SearchBox";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState([]);


  const getMovieRequest = async(searchValue) => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=8367cb5a`; //Template literals (Template strings)


    const response = await fetch(url);
    const responseJson = await response.json();

    if(responseJson.Search)
    {
      setMovies(responseJson.Search);
    }
    // console.log(responseJson);
  }

useEffect(()=>{
  getMovieRequest(searchValue);
},[searchValue]);




  return (
    <div className="container-fluid movie-app">
    <div className="row d-flex align-items-center mb-4 mt-4">
      <MovieListHeading heading = 'Movies' />
      <SearchBox searchValue = {searchValue}  setSearchValue={setSearchValue}/>
    </div>
      <div className="row">
        <MovieList movies={movies} />
      </div>
      
    </div>
  );
};

export default App;
