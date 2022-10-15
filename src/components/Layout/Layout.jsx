import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { NavLinkStyled } from './Layout.styled';
import { Header } from './Layout.styled';
import { Container } from './Layout.styled';

export const Layout = () => {
  return (
    <Container>
      <Header>
        <nav>
          <NavLinkStyled to="/" end>
            Home
          </NavLinkStyled>
          <NavLinkStyled to="/movies">Movies</NavLinkStyled>
        </nav>
      </Header>
      <Suspense>
        <Outlet />
      </Suspense>
    </Container>
  );
};
