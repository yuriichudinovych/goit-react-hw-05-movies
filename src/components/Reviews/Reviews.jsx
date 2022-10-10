import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'services/api';

export const Reviews = () => {
  const { movieId } = useParams();
  const [movieReviews, setMovieReviews] = useState([]);

  useEffect(() => {
    const fetchMoviesReviews = async () => {
      const { results } = await getMovieReviews(movieId);
      console.log(results);
      setMovieReviews(results);
    };
    fetchMoviesReviews();
  }, [movieId]);

  return (
    <>
      <ul>
        {movieReviews.map(({ id, author, content }) => {
          return (
            <li key={id}>
              <p>Autor: {author} </p>
              <p>{content}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
};
