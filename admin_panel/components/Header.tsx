import { Link } from 'react-router-dom';


export default function Header () {
    return (
        <>
            <header className="header">
                <div className="container">
                   <div className="header__hero_section">
                        <h1 className="heading-primary">
                            Welcom do Admin Panel
                        </h1>
                    </div> 

                    <div className="header__navigation">
                            <ul className="header__navigation-list">
                                <li className="header__navigation-list__iitem">
                                     <Link to="/Phones">Phones</Link>
                                </li>
                                <li className="header__navigation-list__iitem">
                                     <Link to="/Accesories">Accesories</Link>
                                </li>
                            </ul>
                    </div>
                </div>
            </header>
        </>
    )
}