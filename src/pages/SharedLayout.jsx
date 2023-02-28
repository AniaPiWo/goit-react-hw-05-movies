import { Outlet } from 'react-router-dom';
import {
  Main,
  Header,
  NavLinkItem,
  Logo,
  NavLinkItemLogo,
} from 'components/AppStyled';
import { Suspense } from 'react';

export const SharedLayout = () => {
  return (
    <>
      <Header>
        <NavLinkItemLogo to="/">
          <Logo>
            <span role="img" aria-label="computer icon">
              🎥
            </span>{' '}
            MoviesApp
          </Logo>
        </NavLinkItemLogo>
        <NavLinkItem to="/">Home</NavLinkItem>
        <NavLinkItem to="/movies">Movies</NavLinkItem>
      </Header>
      <Main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </Main>
    </>
  );
};
