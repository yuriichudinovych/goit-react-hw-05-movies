import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const ItemList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
`;

export const MovieItem = styled.li`
  /* cursor: pointer; */
  width: 185px;
`;

export const MovieTitle = styled.p`
  padding: ${p => p.theme.space[3]}px;
`;

export const ItemLink = styled(Link)`
  display: block;
  text-decoration: none;
  color: ${p => p.theme.colors.black};
  transition: 250ms linear;
  &:hover,
  :focus {
    transform: scale(1.05);
    box-shadow: 4px 5px 10px ${p => p.theme.colors.secondary};
  }
`;
