import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const MoviesGrid = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
  flex-wrap: wrap;

  & li {
    list-style-type: none;
    transition: 0.3s;

    &:hover {
      transform: scale(1.05);
    }
  }

  & img {
    border-radius: 5px;
  }

  & p {
    font-family: 'Roboto', sans-serif;
    text-align: center;
    margin-top: 5px;
    inline-size: 280px;
  }
`;

const Logo = styled.p`
  text-decoration: none;
  font-family: 'Roboto', sans-serif;
  margin-left: 70px;
`;

const NavLinkItem = styled(NavLink)`
  margin-left: 30px;
  text-decoration: none;
  font-family: 'Roboto', sans-serif;
  color: white;
  padding: 8px;
  border: 1px solid white;
  border-radius: 5px;

  &.active {
    color: #fff;
    background-color: hotpink;
    border: 1px solid hotpink;
  }
`;

const NavLinkItemLogo = styled(NavLink)`
  margin-left: 30px;
  text-decoration: none;
  font-family: 'Roboto', sans-serif;
  color: white;
`;

const Header = styled.div`
  margin-left: 150px;
  margin-right: 150px;
  height: 100px;
  display: flex;
  justify-content: left;
  align-items: center;
  font-size: 20px;
  color: white;
  border-bottom: 1px solid white;
`;

const Main = styled.main`
  margin-left: 150px;
  margin-right: 150px;
  margin-top: 40px;
`;

const SearchForm = styled.p`
  margin-bottom: 30px;
  display: flex;
  align-item: center;
  justify-content: center;

  & button {
    border: 1px solid white;
    border-radius: 5px;
    background-color: #1e1e1e;
    color: white;
    padding: 8px;
    margin-left: 15px;

    &:hover {
      background-color: hotpink;
      border: 1px solid hotpink;
      cursor: pointer;
    }
  }

  & input {
    padding: 8px;
    border-radius: 5px;
  }
`;

export {
  Main,
  Header,
  NavLinkItem,
  Logo,
  SearchForm,
  NavLinkItemLogo,
  MoviesGrid,
};
