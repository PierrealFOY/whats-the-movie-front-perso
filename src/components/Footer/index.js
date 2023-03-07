import { NavLink } from 'react-router-dom';
import './styles.scss'

function Footer() {
  return (
    <footer className="bg-dark text-center text-white">
      <div
        className="text-center p-3"
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}
      >
        Copyright <NavLink className="text-white" to="/copyright">&#x24B8; What's the movie ? - 2023</NavLink>
      </div>
    </footer>
  );
}

export default Footer;
