import { useState, useEffect } from 'react';
import { FaHome, FaMobileAlt, FaHeadphones, FaBars, FaPlus } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const closeMenu = () => setMenuOpen(false);
    window.addEventListener('scroll', closeMenu);
    return () => window.removeEventListener('scroll', closeMenu);
  }, []);

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header__container">
        <div className="header__hero_section">
          <h1 className="heading-primary">Welcome to Admin Panel</h1>
        </div>

        <button
          className="header__toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          <FaBars />
        </button>

        <nav className={`header__navigation ${menuOpen ? 'active' : ''}`}>
          <ul className="header__navigation-list">
            <li>
              <Link
                to="/"
                onClick={() => setMenuOpen(false)}
                className={location.pathname === '/' ? 'active-link' : ''}
              >
                <FaHome className="header__icon" /> Home
              </Link>
            </li>
            <li>
              <Link
                to="/Phones"
                onClick={() => setMenuOpen(false)}
                className={location.pathname === '/Phones' ? 'active-link' : ''}
              >
                <FaMobileAlt className="header__icon" /> Phones
              </Link>
            </li>
            <li>
              <Link
                to="/Accessories"
                onClick={() => setMenuOpen(false)}
                className={location.pathname === '/Accessories' ? 'active-link' : ''}
              >
                <FaHeadphones className="header__icon" /> Accessories
              </Link>
            </li>
            <li>
              <Link
                to="/create-product"
                onClick={() => setMenuOpen(false)}
                className={location.pathname === '/create-product' ? 'active-link' : ''}
              >
                <FaPlus className="header__icon" /> Create Product
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
