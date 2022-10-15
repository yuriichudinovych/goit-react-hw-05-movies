import { Notify } from 'notiflix/build/notiflix-notify-aio';

import { SearchBar } from '../../components/SearchBar/SearchBar';
import { searchMovies } from '../../services/api';
import { useSearchParams } from 'react-router-dom';
import { MoviesList } from '../../components/MoviesList/MoviesList';
import { FormContainer } from './Movies.styled';
import { useState, useEffect } from 'react';
const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [moviesList, setMoviesList] = useState([]);

  useEffect(() => {
    const query = searchParams.get('query') ?? '';
    if (query === '') {
      return;
    }
    async function getMovies(query) {
      try {
        const { results } = await searchMovies(query);

        if (results.length === 0) {
          Notify.failure(`Movie ${query} is not found`);
          return;
        }
        setMoviesList(results);
      } catch (error) {
        console.log(error.message);
      }
    }
    getMovies(query);
  }, [searchParams]);

  const handleSubmit = e => {
    e.preventDefault();
    const value = e.target.elements.name.value.toLowerCase().trim();
    if (value === '') {
      Notify.failure('Please enter the movies name');
      return;
    }
    setSearchParams(value !== '' ? { query: value } : {});
    e.target.elements.name.value = '';
  };

  return (
    <FormContainer>
      <SearchBar onSubmit={handleSubmit} />
      {moviesList.length > 0 && <MoviesList movieItems={moviesList} />}
    </FormContainer>
  );
};

export default Movies;
