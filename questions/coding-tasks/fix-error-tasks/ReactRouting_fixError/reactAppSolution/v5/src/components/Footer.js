import { Link } from 'react-router-dom';
import '../App.css';

const Footer = () => {
  return (
    <div className="footer-container">
      <div><Link to='/contact'>Contact Us</Link></div>
      <div>Adress</div>
    </div>
  )
}

export default Footer;
