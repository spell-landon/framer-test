import React from 'react';
import { useEffect, useState } from 'react';
import { BsChevronDown } from 'react-icons/bs';
import { motion, AnimatePresence, Toggle } from 'framer-motion';

function Filter({ setActiveGenre, activeGenre, setFiltered, movies }) {
  const [menu, setMenu] = useState(false);
  const [isOn, setIsOn] = useState(false);
  const toggleSwitch = () => setIsOn(!isOn);

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

  const variants = {
    open: { opacity: 1, y: 0, display: 'block' },
    closed: { opacity: 0, y: '-20px', display: 'none' },
  };
  const spring = {
    type: 'spring',
    stiffness: 700,
    damping: 30,
    duration: 1,
  };

  return (
    <div>
      <h3 onClick={() => setMenu(!menu)}>
        Filter Search <BsChevronDown />
      </h3>
      {/* <div className={`filter_container ${menu ? 'active' : null}`}> */}

      <motion.nav
        animate={menu ? 'open' : 'closed'}
        variants={variants}
        className='filter_container'>
        <p>Genre</p>
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
        <button
          className={activeGenre === 10751 ? 'active' : ''}
          onClick={() => setActiveGenre(10751)}>
          Family
        </button>
        <p>Adult</p>
        <div className='switch' data-isOn={isOn} onClick={toggleSwitch}>
          <motion.div className='handle' layout transition={spring} />
        </div>
      </motion.nav>
    </div>
  );
}

export default Filter;
