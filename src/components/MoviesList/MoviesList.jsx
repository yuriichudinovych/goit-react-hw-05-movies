import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';

import { MovieItem } from './MoviesList.styled';
import { ItemList } from './MoviesList.styled';
import { MovieTitle } from './MoviesList.styled';
import { ItemLink } from './MoviesList.styled';

export const MoviesList = ({ movieItems }) => {
  const location = useLocation();

  return (
    <ItemList>
      {movieItems &&
        movieItems.map(({ id, title, poster_path }) => {
          const movieImgUrl = 'https://image.tmdb.org/t/p/w185' + poster_path;
          return (
            <MovieItem key={id} data-id={id}>
              <ItemLink to={`/movies/${id}`} state={{ from: location }}>
                <img src={movieImgUrl} alt={title} />
                {/* {title} */}
                <MovieTitle>{title}</MovieTitle>
              </ItemLink>
            </MovieItem>
          );
        })}
    </ItemList>
  );
};

MoviesList.propTypes = {
  movieItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      poster_path: PropTypes.string,
    })
  ),
};
