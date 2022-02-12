import React from 'react';
import { useEffect, useState } from 'react';
import { BsChevronDown } from 'react-icons/bs';

function Filter({ setActiveGenre, activeGenre, setFiltered, movies }) {
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    if (activeGenre === 0) {
      setFiltered(movies);
      return;
    }
    const filtered = movies.filter((movie) =>
      movie.genre_ids.includes(activeGenre)
    );
    setFiltered(filtered);
  }, [activeGenre]);

  return (
    <div>
      <h3 onClick={() => setMenu(!menu)}>
        Filter Search <BsChevronDown />
      </h3>

      <div className={`filter_container ${menu ? 'active' : null}`}>
        <button
          className={activeGenre === 0 ? 'active' : ''}
          onClick={() => setActiveGenre(0)}>
          All
        </button>
        <button
          className={activeGenre === 35 ? 'active' : ''}
          onClick={() => setActiveGenre(35)}>
          Comedy
        </button>
        <button
          className={activeGenre === 28 ? 'active' : ''}
          onClick={() => setActiveGenre(28)}>
          Action
        </button>
        <button
          className={activeGenre === 12 ? 'active' : ''}
          onClick={() => setActiveGenre(12)}>
          Adventure
        </button>
        <button
          className={activeGenre === 18 ? 'active' : ''}
          onClick={() => setActiveGenre(18)}>
          Drama
        </button>
      </div>
    </div>
  );
}

export default Filter;
