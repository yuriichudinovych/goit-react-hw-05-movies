import { useState } from 'react';
import { searchMovies } from '../../services/api';

export const SearchBar = () => {
  const [searchValue, setSearchValue] = useState('');

  const handleChangeSearch = e => {
    setSearchValue(e.currentTarget.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();
    async function getMovies(movie) {
      const data = await searchMovies(movie);
      console.log(data);
      return data;
    }
    getMovies(searchValue);
    setSearchValue('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="">
        <input
          type="text"
          name="name"
          onChange={handleChangeSearch}
          value={searchValue}
        />
      </label>
      <button type="submit">Search</button>
    </form>
  );
};
