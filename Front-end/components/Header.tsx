import { Link } from 'react-router-dom';
import { FaUser, FaShoppingBasket } from 'react-icons/fa';

export default function Header() {
    return (
        <header className="header">
            <Link to="/" className="logo-link">
                <div className="logo-text">A R I V A</div>
            </Link>
            <div className="header-welcome">
                🎉 WELCOME TO THE COOLEST SHOP EVER!!! 🛒💚
            </div>
            <nav>
                <ul className="nav-list">
                    <li>
                        <Link to="/phons" className="nav-link">
                            Phons
                        </Link>
                    </li>
                    <li>
                        <Link to="/accesores" className="nav-link">
                            Accesores
                        </Link>
                    </li>
                    <li>
                        <Link to="/about-us" className="nav-link">
                            About Us
                        </Link>
                    </li>
                    <li>
                        <Link to="/login" className="nav-icon-link">
                            <FaUser />
                        </Link>
                    </li>
                    <li>
                        <Link to="/basket" className="nav-icon-link">
                            <FaShoppingBasket />
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
