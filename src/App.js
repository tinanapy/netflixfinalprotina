import "./App.css"
import Row from './Row';
import requests from "./requests";
import Banner from "./Banner";
import Nav from "./Nav";


function App() { 
  return (
    <div className="App">
      <Banner />
      <Nav />
      <Row
        title="Netflix Origionals"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated Movies" fetchUrl={requests.fetchTopRattedMovies} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
      <Row title=" Drama" fetchUrl={requests.fetchDrama} />
      <Row title="Animation" fetchUrl={requests.fetchAnimation} />
      <Row title="Fantasy" fetchUrl={requests.fetchFantasy} />
      <Row title="Thriller" fetchUrl={requests.fetchThriller} />
      <Row title="Horror" fetchUrl={requests.fetchHorror} />
    </div>
  );
}

export default App














































