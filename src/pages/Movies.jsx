import { useEffect, useState } from 'react';
import { NavLink, useLocation, useSearchParams } from 'react-router-dom';
import { getMovieByQuerySearch } from 'utils/MoviesAPI';
import { SearchForm, MoviesGrid } from 'components/AppStyled';

const Movies = () => {
  const [movieList, setMovieList] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const movieToSearch = searchParams.get('movie');
  const location = useLocation();

  useEffect(() => {
    if (movieToSearch === null) {
      return;
    }

    getMovieByQuerySearch(movieToSearch).then(e => setMovieList(e));
  }, [movieToSearch]);

  const submitHandler = e => {
    e.preventDefault();

    const { value } = e.currentTarget.elements.movie;

    setSearchParams({ movie: value });

    e.currentTarget.reset();
  };

  const viewPoster = poster_path => {
    if (poster_path === null) {
      return '../images/no_cover.png';
    }
    return `https://image.tmdb.org/t/p/w300${poster_path}`;
  };

  return (
    <div>
      <SearchForm>
        <form onSubmit={submitHandler}>
          <input type="text" placeholder="input movie name" name="movie" />
          <button type="submit">Search</button>
        </form>
      </SearchForm>
      <MoviesGrid>
        {movieList !== null &&
          movieList.map(({ id, poster_path, title }) => (
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
          ))}{' '}
      </MoviesGrid>
    </div>
  );
};

export default Movies;
