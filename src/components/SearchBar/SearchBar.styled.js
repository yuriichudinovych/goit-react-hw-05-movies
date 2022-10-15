import styled from '@emotion/styled';

export const SearchForm = styled.form`
  text-align: center;
  margin-bottom: ${p => p.theme.space[5]}px;
`;

export const SearchBtn = styled.button`
  padding: ${p => p.theme.space[2]}px ${p => p.theme.space[3]}px;
  background-color: transparent;
  border: 2px solid ${p => p.theme.colors.black};
  border-radius: 4px;
  transition: 250ms linear;
  &:hover,
  :focus {
    color: ${p => p.theme.colors.white};
    background-color: ${p => p.theme.colors.secondary};
    border-color: ${p => p.theme.colors.secondary};
  }
`;
export const SearchInput = styled.input`
  padding: ${p => p.theme.space[2]}px ${p => p.theme.space[3]}px;
  margin-right: ${p => p.theme.space[3]}px;
  &:focus {
    outline-color: ${p => p.theme.colors.secondary};
  }
`;
