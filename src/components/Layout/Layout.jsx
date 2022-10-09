import { Outlet } from 'react-router-dom';

import { NavLinkStyled } from './Layout.styled';

export const Layout = () => {
  return (
    <div>
      <header>
        <nav>
          <NavLinkStyled to="/" end>
            Home
          </NavLinkStyled>
          <NavLinkStyled to="/movies">Movies</NavLinkStyled>
        </nav>
      </header>
      <Outlet />
    </div>
  );
};
