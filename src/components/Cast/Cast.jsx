import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCast } from 'services/api';

export const Cast = () => {
  const { movieId } = useParams();
  const [movieInfo, setMovieInfo] = useState([]);
  //   const [actorImgUrl, setActorImgUrl] = useState('');
  useEffect(() => {
    const fetchCast = async () => {
      const { cast } = await getMovieCast(movieId);
      console.log(cast);
      setMovieInfo(cast);
      //   setActorImgUrl('https://image.tmdb.org/t/p/w342' + cast.profile_path);
    };
    fetchCast();
  }, [movieId]);
  console.log(movieId);
  console.log(movieInfo);

  const createImgUrl = profile_path => {
    if (!profile_path) {
      return;
    }
    return 'https://image.tmdb.org/t/p/w342' + profile_path;
  };
  return (
    <>
      <ul>
        {movieInfo.map(({ id, name, character, profile_path }) => {
          return (
            <li key={id}>
              <img src={createImgUrl(profile_path)} alt={name} />
              <p>{name}</p>
              <p>Character: {character}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
};
