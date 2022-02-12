import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Movie from './components/Movie/Movie';
import Filter from './components/Filter/Filter';
import { motion, AnimatePresence } from 'framer-motion';
import Pagination from '@mui/material/Pagination';

function App() {
  const searchKey = {
    apiKey: process.env.REACT_APP_MOVIE_KEY,
  };
  const [movies, setMovies] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [activeGenre, setActiveGenre] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetchPopular();
  }, [currentPage]);

  const fetchPopular = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${searchKey.apiKey}&language=en-US&page=${currentPage}`
      )
      .then((res) => {
        console.log(res.data);
        setMovies(res.data.results);
        setFiltered(res.data.results);
        setTotalPages(res.data.total_pages);
      });
  };
  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  return (
    <div className='App'>
      <h1>Popular Movies</h1>
      <Filter
        movies={movies}
        setFiltered={setFiltered}
        activeGenre={activeGenre}
        setActiveGenre={setActiveGenre}
      />
      <motion.div layout className='popular-movies'>
        <AnimatePresence>
          {filtered.map((item) => {
            return <Movie key={item.id} movie={item} />;
          })}
        </AnimatePresence>
      </motion.div>
      <Pagination
        count={totalPages}
        defaultPage={0}
        boundaryCount={2}
        className='pagination'
        page={currentPage}
        onChange={handlePageChange}
      />
    </div>
  );
}

export default App;
