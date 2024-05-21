import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 950) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <header className="header">
      <div className="container">
        <h1 className="logo">
          Ghidul<br />studentului
        </h1>
        <div className="hamburger" onClick={toggleMenu}>
          &#9776; {/* Hamburger icon */}
        </div>
        <nav className={`nav ${isOpen ? 'open' : ''}`} id="nav-menu">
          <ul className="nav__list">
            <li className="nav__item">
              <NavLink to="/upt" className="nav__link">
                UPT
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink to="/facultatea-mea" className="nav__link">
                Facultatea mea
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink to="/beneficii-si-servicii" className="nav__link">
                Beneficii si servicii
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink to="/campusul-universitar" className="nav__link">
                Campusul universitar
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink to="/student-life" className="nav__link">
                Student life
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink to="/voluntariat" className="nav__link">
                Voluntariat
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;