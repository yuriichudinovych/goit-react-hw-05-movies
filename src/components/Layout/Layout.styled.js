import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  padding-left: ${p => p.theme.space[4]}px;
  padding-right: ${p => p.theme.space[4]}px;
  max-width: 1200px;
  margin: 0 auto;
`;

export const NavLinkStyled = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: ${p => p.theme.colors.black};
  font-weight: 500;
  display: inline-block;

  &.active {
    color: ${p => p.theme.colors.white};
    background-color: ${p => p.theme.colors.secondary};
  }

  :hover:not(.active),
  :focus-visible:not(.active) {
    color: ${p => p.theme.colors.secondary};
  }
`;

export const Header = styled.header`
  padding: ${p => p.theme.space[3]}px 0;
  border-bottom: 2px solid black;
`;
