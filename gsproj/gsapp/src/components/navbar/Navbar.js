import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom'
import './Navbar.css'
import { Link } from 'react-router-dom';
import upt_logo from '../../assets/upt_logo.svg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target) && !event.target.closest('.hamburger')) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

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
      
      <Link to={`/`}>
        <h1 className="logo">
          Ghidul studentului 
        </h1>
      </Link>
      <div style={{ display: 'flex', flexDirection: 'row'}}>
      <div className="hamburger" onClick={toggleMenu}>
        &#9776; {/* Hamburger icon */}
      </div>
      <nav className={`nav ${isOpen ? 'open' : ''}`} id="nav-menu" ref={menuRef}>
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

      
        <img src={upt_logo} alt="Logo" className="fixed-image" />
      </div>
    </header>
  );
};

export default Navbar;
