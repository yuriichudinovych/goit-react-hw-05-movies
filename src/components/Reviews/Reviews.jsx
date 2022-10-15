import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'services/api';
import { AutorTitle, RviewsItem } from './Reviews.styled';
export const Reviews = () => {
  const { movieId } = useParams();
  const [movieReviews, setMovieReviews] = useState([]);

  useEffect(() => {
    const fetchMoviesReviews = async () => {
      const { results } = await getMovieReviews(movieId);
      setMovieReviews(results);
    };
    fetchMoviesReviews();
  }, [movieId]);

  return (
    <>
      <ul>
        {movieReviews.length ? (
          movieReviews.map(({ id, author, content }) => {
            return (
              <RviewsItem key={id}>
                <AutorTitle>Autor: {author} </AutorTitle>
                <p>{content}</p>
              </RviewsItem>
            );
          })
        ) : (
          <p>We don't have any reviews for this movie.</p>
        )}
      </ul>
    </>
  );
};
