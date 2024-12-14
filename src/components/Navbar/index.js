import './index.css'; 
import { FaSearch, FaShoppingCart } from 'react-icons/fa';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <h1>Majestic Stones</h1>
            </div>
            <ul className="navbar-links">
                <li><a href="#shop">Shop By Category</a></li>
                <li><a href="#partner">Partner With Us</a></li>
            </ul>
            <div className="navbar-actions">
                <div className="search-bar">
                    <FaSearch />
                    <input type="text" placeholder="Search for products" />
                </div>
                <div className="cart-icon">
                    <FaShoppingCart />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
