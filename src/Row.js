import axios from "./axios";
import React, { useState, useEffect } from "react";
import "./Row.css";
//useState and useEffect are 2 functions that need to be imported in a list.
//can also use *as* keyword after the imported class, func, var to use as defined.
const baseUrl = "https://image.tmdb.org/t/p/original/";
function Row({ title, fetchUrl }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      console.log(request);
      console.log(request.data.results);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);
  //the array is the dependency on which the useEffect() depends
  console.table(movies);
  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row-posters">
        {movies.map((movie) => (
          <img
            key={movie.id}
            // optimization using react key
            className="row-poster"
            src={`${baseUrl}${movie.poster_path}`}
            alt={movie.name}
          />
        ))}
      </div>
    </div>
  );
}

export default Row;
/*
non-defualt imports and exports:
    1.they are named.
    2.importing/exporting(apart from declarations) attributes is through {}.
    3.can be multiple/module.
default exports and imports:
    1. they may not be named.
    2. {} not required.
    3. 1/module
*/
