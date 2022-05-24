import { NavLink } from 'react-router-dom';
import '../App.css';

const Header = () => {
  return (
    <div className="nav-container">
      <div className="logo-nav">Logo</div>
      <div className="all-links">
        <div><NavLink to="/" activeClassName="active-link" className="nav-link">Home</NavLink></div>
        <div><NavLink to="/about" activeClassName="active-link" className="nav-link">About</NavLink></div>
        <div><NavLink to="/contact" activeClassName="active-link" className="nav-link">Contact Us</NavLink></div>
      </div>
    </div>
  )
}

export default Header;
