import { Suspense, useEffect } from 'react';
import { useState } from 'react';
import { useParams, useLocation, Outlet } from 'react-router-dom';
import { fetchMovieDetails } from 'services/api';
import { FaArrowLeft } from 'react-icons/fa';

import {
  MoviesDetails,
  CardWrapper,
  DescriptionContainer,
  LinkItem,
  LinkItemGoBack,
  MovieTitle,
  MovieDesc,
  SubTitle,
  GenresList,
  GenreItem,
  LinkItemReviews,
  AdditionalList,
} from './MovieDetails.styled';

const MovieDetails = () => {
  const { movieId } = useParams();

  const [movieInfo, setMovieInfo] = useState([]);
  const [cardImgUrl, setCardImgUrl] = useState('');
  const location = useLocation();

  const backLinkHref = location.state ? location.state.from : '/';

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const data = await fetchMovieDetails(movieId);
        setMovieInfo(data);
        setCardImgUrl('https://image.tmdb.org/t/p/w342' + data.poster_path);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchMovie();
  }, [movieId]);

  const { original_title, genres, release_date, overview, vote_average } =
    movieInfo;
  const releaseYear = Number.parseInt(release_date);

  return (
    <MoviesDetails>
      <LinkItemGoBack to={backLinkHref}>
        <FaArrowLeft />
        Go back
      </LinkItemGoBack>
      <CardWrapper>
        <img src={cardImgUrl} alt={original_title} />

        <DescriptionContainer>
          <MovieTitle>
            {original_title} ({releaseYear})
          </MovieTitle>
          <MovieDesc>
            Vote average: {Number(vote_average).toFixed(1)}{' '}
          </MovieDesc>
          <SubTitle>Overview</SubTitle>
          <MovieDesc>{overview}</MovieDesc>
          <SubTitle>Geres</SubTitle>
          <GenresList>
            {genres &&
              genres.map(({ id, name }) => {
                return <GenreItem key={id}>{name}</GenreItem>;
              })}
          </GenresList>
        </DescriptionContainer>
      </CardWrapper>
      <div>
        <SubTitle>Additional information</SubTitle>
        <AdditionalList>
          <li>
            <LinkItem to="cast" state={{ from: backLinkHref }}>
              Cast
            </LinkItem>
          </li>
          <li>
            <LinkItemReviews to="reviews" state={{ from: backLinkHref }}>
              Reviews
            </LinkItemReviews>
          </li>
        </AdditionalList>
        <Suspense>
          <Outlet />
        </Suspense>
      </div>
    </MoviesDetails>
  );
};

export default MovieDetails;
