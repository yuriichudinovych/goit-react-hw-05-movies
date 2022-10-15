import { SearchForm, SearchBtn, SearchInput } from './SearchBar.styled';

export const SearchBar = ({ onSubmit, onChange }) => {
  return (
    <SearchForm onSubmit={onSubmit}>
      <label htmlFor="">
        <SearchInput type="text" name="name" />
      </label>
      <SearchBtn type="submit">Search</SearchBtn>
    </SearchForm>
  );
};
