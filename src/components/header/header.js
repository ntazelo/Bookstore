import { Link } from 'react-router-dom';
import './header.css';

const Header = () => (
  <header>
    <div className="cont-nav">
      <nav>
        <ul className="navbar-list">
          <li className="navbar-option">
            <Link className="navbar-title" to="/">Bookstore CMS</Link>
          </li>
          <li className="navbar-option">
            <Link className="navbar-link" to="/">Books</Link>
          </li>
          <li className="navbar-option">
            <Link className="navbar-link" to="/categories">Categories</Link>
          </li>
        </ul>
      </nav>
      <span className="logo-cont"><i className="fas fa-user color-logo" /></span>
    </div>
  </header>
);

export default Header;
