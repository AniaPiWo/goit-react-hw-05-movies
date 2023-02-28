import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const MovieInfo = styled.div`
  display: flex;
  margin-top: 10px;
  color: white;
`;

const MovieTextInfo = styled.div`
  padding: 20px;
  padding-top: 0;
  color: white;
  font-family: 'Roboto', sans-serif;
  line-height: 20px;
`;

const AdditionalMovieInfo = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px;
  gap: 20px;
  padding-top: 5px;
  padding-bottom: 5px;
  margin-bottom: 20px;
  color: white;
  font-family: 'Roboto', sans-serif;
`;

const NavLinkItem = styled(NavLink)`
  text-decoration: none;
  color: white;
  font-family: 'Roboto', sans-serif;
  padding: 8px;
  line-height: 20px;
  border: 1px solid white;
  border-radius: 5px;

  :hover {
    color: hotpink;
    border: 1px solid hotpink;
  }

  &.active {
    color: #fff;
    background-color: hotpink;
    border: 1px solid hotpink;
  }
`;

export { NavLinkItem, AdditionalMovieInfo, MovieInfo, MovieTextInfo };
