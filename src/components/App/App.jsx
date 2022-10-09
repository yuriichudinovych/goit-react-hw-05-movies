import { Routes, Route } from 'react-router-dom';

import Home from '../../pages/Home';

import { Layout } from '../Layout/Layout';
import Movies from '../../pages/Movies/Movies';
import MovieDetails from '../../pages/MovieDetails';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetails />} />
      </Route>
      <Route path="/" element={<h1>Hello world</h1>} />
      <Route path="*" element={<p>Not found!</p>} />
    </Routes>
  );
};
