import '../App.css';

const Header = () => {
  return (
    <div className="nav-container">
      <div className="logo-nav">Logo</div>
      <div className="all-links">
        <div><a to="/" activeClassName="active-link" className="nav-link">Home</a></div>
        <div><a to="/about" activeClassName="active-link" className="nav-link">About</a></div>
        <div><a to="/contact" activeClassName="active-link" className="nav-link">Contact Us</a></div>
      </div>
    </div>
  )
}

export default Header;