import { Suspense, useEffect, useState } from 'react';
import { useParams, NavLink, Outlet, useLocation } from 'react-router-dom';
import { getMovieByID } from 'utils/MoviesAPI';

import {
  NavLinkItem,
  AdditionalMovieInfo,
  MovieInfo,
  MovieTextInfo,
} from 'pages/MovieDetails/MovieDetailStyled';

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();
  console.log(location.state);
  const BASE_IMG_URL = 'https://image.tmdb.org/t/p/w300/';

  useEffect(() => {
    getMovieByID(movieId).then(movie => setMovie(movie));
  }, [movieId]);

  if (movie === null) {
    return;
  }
  const { title, vote_average, poster_path, overview } = movie;

  return (
    <>
      <NavLink to={location.state ?? '/'}>{'⬅️'}Back to movielist</NavLink>
      <MovieInfo>
        <img src={`${BASE_IMG_URL}${poster_path}`} alt={title} />
        <MovieTextInfo>
          <h1>{title}</h1>
          <h2>User score:</h2>
          <p>{Number(vote_average).toFixed(2)} / 10</p>
          <h2>Owerview:</h2>
          <p> {overview}</p>
          <AdditionalMovieInfo>
            <h3>
              <NavLinkItem to="cast">Cast</NavLinkItem>
            </h3>
            <h3>
              <NavLinkItem to="reviews">Reviews</NavLinkItem>
            </h3>
          </AdditionalMovieInfo>
        </MovieTextInfo>
      </MovieInfo>

      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;
