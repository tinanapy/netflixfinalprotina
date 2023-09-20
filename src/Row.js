import React, { useEffect, useState } from "react";
import "./Row.css";
import axios from "./axios";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer"

const base_url = "https://image.tmdb.org/t/p/original/";
function Row({ title, fetchUrl,isLargeRow }) {
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      // console.log(request )
        setMovies(request.data.results);
        
      return request;
      }
      
    fetchData();
  }, [fetchUrl]);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };
  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      //movie weset gebto movie title yifelgena kagegne titelun yiwesdena 27 lay url wesedo kmovie 28 urlparams.get("v") bmilew method video id then 8 lay wesedo trailer url lay yasekemetewal yawetal
      movieTrailer(movie?.title || movie?.name || movie.original_name)
        .then((url) => {
          const urlparams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlparams.get("v"));
        })
        .catch((error) => console.log(error));
    }
  };
//    we gave [fetchUrl] because the url will be changes trending comedies romance menamen eyale; 
    
console.log(movies); //used to asks for trending then action ...
  return (
    <div className="row">
      <h1>{title}</h1>
      <div className="row__posters">
        {movies?.map((movie) => (
          <img
            //click sidereg trailer enditay
            onClick={() => handleClick(movie)}
            //   row poster yemilewen className eytetekeme isLargeRow yemilewen kagegne row__posterLarge tetkem malet new below
            className={`row__poster ${isLargeRow && " row__posterLarge"}`}
            // isLargeRow ? kagegneh(telek kehon) movie.poster_path: kalagegneh demo movie.backdrop_path yehen tetekem
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
      <div style={{ padding: "40px" }}>
        {/* //trailerkelelew or video kelelew 62 will not work */}
        {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
      </div>
    </div>
  );
}

export default Row;
