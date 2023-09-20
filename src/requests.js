

  const API_KEY = "90d40882accdfb910bfaabb3ed9f1b0d";
const requests = {
  // fetchContinueWatchingforTenan:``
  // fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  // fetchNetflixOrigionals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRattedMovies: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,

  fetchDrama: `/discover/movie?api_key=${API_KEY}&with_genres=18`,
  fetchAnimation: `/discover/movie?api_key=${API_KEY}&with_genres=16`,
  fetchFantasy: `/discover/movie?api_key=${API_KEY}&with_genres=14`,
  fetchThriller: `/discover/movie?api_key=${API_KEY}&with_genres=53`,
  fetchHorror: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
}; 
export default requests