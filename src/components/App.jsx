import { Routes, Route } from 'react-router-dom';
import { SharedLayout } from 'pages/SharedLayout';
import { lazy } from 'react';

const Home = lazy(() => import('pages/Home'));
const Movies = lazy(() => import('pages/Movies'));
const MovieDetails = lazy(() => import('pages/MovieDetails/MovieDetails'));
const Cast = lazy(() => import('components/Cast/Cast'));
const Reviews = lazy(() => import('components/Reviews/Reviews'));

export const App = () => {
  return (
    <Routes>
      <Route to="/" element={<SharedLayout />}>
        <Route
          path={'*'}
          index
          element={
            <p style={{ fontFamily: 'Roboto', textAlign: 'center' }}>
              We found nothing 😞
            </p>
          }
        />
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />}></Route>
          <Route path="reviews" element={<Reviews />}></Route>
        </Route>
      </Route>
    </Routes>
  );
};
