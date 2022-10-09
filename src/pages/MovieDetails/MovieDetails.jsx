import { useParams } from 'react-router-dom';

const MovieDetails = () => {
  const { movieId } = useParams();
  console.log(movieId);
  return <p>More information</p>;
};

export default MovieDetails;
