import { useEffect } from 'react';
import { useState } from 'react';
import { useParams, Link, Outlet } from 'react-router-dom';
import { fetchMovieDetails } from 'services/api';

const MovieDetails = () => {
  const { movieId } = useParams();

  const [movieInfo, setMovieInfo] = useState([]);
  const [cardImgUrl, setCardImgUrl] = useState('');

  useEffect(() => {
    const fetchMovie = async () => {
      const data = await fetchMovieDetails(movieId);
      setMovieInfo(data);
      setCardImgUrl('https://image.tmdb.org/t/p/w342' + data.poster_path);
    };
    fetchMovie();
  }, [movieId]);

  const { original_title, genres, release_date, overview, vote_average } =
    movieInfo;

  const releaseYear = Number.parseInt(release_date);

  return (
    <>
      <div display="flex">
        <img src={cardImgUrl} alt={original_title} />

        <div>
          <h2>
            {original_title} ({releaseYear})
          </h2>
          <p> Vote average: {vote_average} </p>
          <h3>overview</h3>

          <p>{overview}</p>
        </div>
      </div>
      <div>
        <h2>Additional information</h2>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
        <Outlet />
      </div>
    </>
  );
};

export default MovieDetails;
