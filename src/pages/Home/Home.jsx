import { fetchTrending } from '../../services/api';
import { useState, useEffect } from 'react';

import { MoviesList } from 'components/MoviesList/MoviesList';

import { HomeContainer } from './Home.styled';
import { HomeTitle } from './Home.styled';
const Home = () => {
  const [trandigMovies, settrandingMovies] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchTrandingMovies() {
      try {
        const data = await fetchTrending();

        settrandingMovies(data.results);
      } catch (error) {
        setError(error);
      } finally {
      }
    }
    fetchTrandingMovies();
  }, []);

  return (
    <HomeContainer>
      <HomeTitle>Tranding today</HomeTitle>
      <MoviesList movieItems={trandigMovies} />
      {error && <p>{error}</p>}
    </HomeContainer>
  );
};

export default Home;
