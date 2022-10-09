import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
export const StyledNavLink = styled(NavLink)`
  color: black;

  &.active {
    color: orange;
  }
`;
