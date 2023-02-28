import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { getTrendingMovies } from 'utils/MoviesAPI';
import { MoviesGrid } from 'components/AppStyled';

const Home = () => {
  const [trends, setTrends] = useState([]);
  const location = useLocation();

  useEffect(() => {
    getTrendingMovies().then(movies => setTrends(movies.results));
  }, []);

  const viewPoster = poster_path => {
    if (poster_path === null) {
      return './images/no_cover.png';
    }
    return `https://image.tmdb.org/t/p/w300${poster_path}`;
  };

  return (
    <MoviesGrid>
      {trends.length > 0 &&
        trends.map(({ id, poster_path, title }) => (
          <li key={id}>
            <NavLink to={`/movies/${id}`} state={location}>
              <div>
                <img
                  src={`${viewPoster(poster_path)}`}
                  alt={title}
                  width="300"
                  height="450"
                />
                <p>{title}</p>
              </div>
            </NavLink>
          </li>
        ))}
    </MoviesGrid>
  );
};

export default Home;
