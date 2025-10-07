import { useState, useEffect } from "react";
import { FaHome, FaMobileAlt, FaHeadphones } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <div className="container">
        <div className="header__hero_section">
          <h1 className="heading-primary">Welcome to Admin Panel</h1>
        </div>

        <nav className="header__navigation">
          <ul className="header__navigation-list">
            <li>
              <Link to="/">
                <FaHome className="header__icon" /> Home
              </Link>
            </li>
            <li>
              <Link to="/Phones">
                <FaMobileAlt className="header__icon" /> Phones
              </Link>
            </li>
            <li>
              <Link to="/Accessories">
                <FaHeadphones className="header__icon" /> Accessories
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
