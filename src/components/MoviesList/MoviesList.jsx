import { Link } from 'react-router-dom';

export const MoviesList = ({ movieItems }) => {
  return (
    <ul>
      {movieItems &&
        movieItems.map(movieItem => {
          return (
            <li
              key={movieItem.id}
              data-id={movieItem.id}
              // onClick={e => handleClickMovie(e, trandigMovie.id)}
            >
              <Link to={`movies/${movieItem.id}`}>{movieItem.title}</Link>
            </li>
          );
        })}
    </ul>
  );
};
