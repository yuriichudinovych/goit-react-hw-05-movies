import { fetchTrending, fetchMovieDetails } from '../../services/api';
import { useState, useEffect } from 'react';

import { MoviesList } from 'components/MoviesList/MoviesList';

const Home = () => {
  const [trandigMovies, settrandingMovies] = useState([]);
  const [error, setError] = useState(null);
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchTrandingMovies() {
      try {
        const data = await fetchTrending();

        settrandingMovies(data.results);
      } catch (error) {
        setError(error);
      } finally {
        // setIsloading(false);
      }
    }
    fetchTrandingMovies();
  }, []);
  const handleClickMovie = async (e, key) => {
    e.preventDefault();
    const data = await fetchMovieDetails(key);
    setMovie(() => data);
  };

  return <MoviesList movieItems={trandigMovies} />;
};

export default Home;
