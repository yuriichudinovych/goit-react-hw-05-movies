import { fetchTrending, fetchMovieDetails } from '../../services/api';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [trandigMovies, settrandingMovies] = useState([]);
  const [error, setError] = useState(null);
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchTrandingMovies() {
      try {
        const data = await fetchTrending();
        console.log(data.results);
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
    console.log(data, key);
  };
  return (
    <ul>
      {trandigMovies.map(trandigMovie => {
        return (
          <li
            key={trandigMovie.id}
            data-id={trandigMovie.id}
            onClick={e => handleClickMovie(e, trandigMovie.id)}
          >
            {' '}
            <Link to={`movies/${trandigMovie.id}`}>
              {trandigMovie.title}
            </Link>{' '}
          </li>
        );
      })}
    </ul>
  );
};

export default Home;
