import axios from 'axios';

/*


https://developers.themoviedb.org/3/trending/get-trending
https://developers.themoviedb.org/3/search/search-movies
https://developers.themoviedb.org/3/movies/get-movie-details
https://developers.themoviedb.org/3/movies/get-movie-credits
https://developers.themoviedb.org/3/movies/get-movie-reviews

*/
const API_KEY = '7a40497c85da3b51ba4e077a02ed05ae';
const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: API_KEY,
  },
});

export const fetchTrending = async () => {
  const { data } = await instance.get('/trending/movie/week');

  return data;
};

export const searchMovies = async query => {
  const { data } = await instance.get('/search/movie', {
    params: {
      query,
    },
  });
  return data;
};

export const fetchMovieDetails = async movie_id => {
  const { data } = await instance.get(`/movie/${movie_id}`, {
    params: {
      language: 'en - US',
    },
  });
  return data;
};
