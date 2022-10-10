import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const NavLinkStyled = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;
  display: inline-block;

  &.active {
    color: white;
    background-color: orangered;
  }
`;
