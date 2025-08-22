import { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { FaUser, FaShoppingBasket } from 'react-icons/fa';

export default function Header() {
    const navigate = useNavigate();
    const { pathname } = useLocation();
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        setIsLoggedIn(!!storedUser);
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('user');
        setIsLoggedIn(false);
        navigate('/');
    };

    const getNavLinkClass = (path: string) => {
        // Highlight link if pathname starts with the path
        return `nav-link ${pathname.startsWith(path) ? 'active' : ''}`;
    };

    const getIconLinkClass = (path: string) => {
        return `nav-icon-link ${pathname.startsWith(path) ? 'active' : ''}`;
    };

    return (
        <header className="header">
            <Link to="/" className="logo-link">
                <div className="logo-text">A R I V A</div>
            </Link>

            <div className="header-welcome">
                🎉 WELCOME TO THE COOLEST SHOP EVER!!! 🛒🩷
            </div>

            <nav>
                <ul className="nav-list">
                    <li>
                        <Link to="/phones" className={getNavLinkClass('/phones')}>
                            Phons
                        </Link>
                    </li>
                    <li>
                        <Link to="/aceesories" className={getNavLinkClass('/accesores')}>
                            Accesores
                        </Link>
                    </li>
                    <li>
                        <Link to="/AboutUs" className={getNavLinkClass('/AboutUs')}>
                            About Us
                        </Link>
                    </li>
                    <li>
                        {isLoggedIn ? (
                            <button
                                onClick={handleLogout}
                                className={getNavLinkClass('/logout') + ' logout-text'}
                            >
                                Log Out
                            </button>
                        ) : (
                            <Link to="/login" className={getIconLinkClass('/login')}>
                                <FaUser />
                            </Link>
                        )}
                    </li>
                    <li>
                        <Link to="/basket" className={getIconLinkClass('/basket')}>
                            <FaShoppingBasket />
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
