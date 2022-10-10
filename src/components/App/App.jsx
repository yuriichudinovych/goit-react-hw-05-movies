import { Routes, Route } from 'react-router-dom';

import Home from '../../pages/Home';
import { Cast } from 'components/Cast/Cast';
import { Reviews } from 'components/Reviews/Reviews';
import { Layout } from '../Layout/Layout';
import Movies from '../../pages/Movies/Movies';
import MovieDetails from '../MovieDetails';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />}></Route>
          <Route path="reviews" element={<Reviews />}></Route>
        </Route>
      </Route>
      <Route path="*" element={<p>Not found!</p>} />
    </Routes>
  );
};
