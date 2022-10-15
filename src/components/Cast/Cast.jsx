import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCast } from 'services/api';

import { CastItem, CastImg, ActorName, CastList } from './Cast.styled';

export const Cast = () => {
  const { movieId } = useParams();
  const [movieInfo, setMovieInfo] = useState([]);

  useEffect(() => {
    const fetchCast = async () => {
      const { cast } = await getMovieCast(movieId);
      setMovieInfo(cast);
    };
    fetchCast();
  }, [movieId]);

  const createImgUrl = profile_path => {
    if (!profile_path) {
      return;
    }
    return 'https://image.tmdb.org/t/p/w342' + profile_path;
  };
  return (
    <>
      {movieInfo.length > 0 && (
        <CastList>
          {movieInfo.map(({ id, name, character, profile_path }) => {
            return (
              <CastItem key={id}>
                <CastImg
                  src={createImgUrl(profile_path)}
                  alt={name}
                  width="342"
                  height="513"
                />
                <ActorName>{name}</ActorName>
                <p>Character: {character}</p>
              </CastItem>
            );
          })}
        </CastList>
      )}
    </>
  );
};
