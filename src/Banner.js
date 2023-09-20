import "./Banner.css"
import React, { useEffect, useState } from "react";
import axios from "./axios";
import requests from "./requests";
function Banner() {
  const [movie, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      // console.log(request )
      setMovies(
        request?.data.results[
          Math.floor(Math.random() * request?.data.results.length)
        ]
      );
      // request? means ? optionalchaining expects the out put undefined
      return request;
    }

    fetchData();
  }, []);
  console.log(movie);
  //movie?.overview,150 means 150 kalat belay sihon truncate adergewena"..." bzih melku asekemet
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  
  return (
    
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundposition: "center center",
        //   backgroundposition:"center"
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">
          {movie?.title || movie?.name || movie.original_name}
        </h1>
        <div className="banner__buttons">
          <button className="banner__button">play</button>
          <button className="banner__button">My List</button>
        </div>
        <h1 className="banner__description">
          {truncate(movie?.overview, 150)}
        </h1>
      </div>
      <div className="banner__fadeBottom" />
    </header>
  );
}

export default Banner