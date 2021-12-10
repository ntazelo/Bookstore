import { Link } from 'react-router-dom';
import './header.css';

const Header = () => (
  <header>
    <div className="cont-nav">
      <h2 className="navbar-title">Bookstore</h2>
      <nav>
        <ul className="navbar-list">
          <li className="navbar-option">
            <Link className="navbar-link" to="/">Books</Link>
          </li>
          <li className="navbar-option">
            <Link className="navbar-link" to="/categories">Categories</Link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
);

export default Header;
