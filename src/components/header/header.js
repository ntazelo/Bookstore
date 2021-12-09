import './header.css';

const Header = () => (
  <header>
    <div className="cont-nav">
      <h2 className="navbar-title">Bookstore</h2>
      <nav>
        <ul className="navbar-list">
          <li className="navbar-option">
            <a className="navbar-link" href="/">Books</a>
          </li>
          <li className="navbar-option">
            <a className="navbar-link" href="/categories">Categories</a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
);

export default Header;
