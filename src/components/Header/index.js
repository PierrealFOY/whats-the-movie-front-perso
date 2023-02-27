import PropTypes from 'prop-types';
import './styles.scss';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import logo from './logo.png';
import { resetScore } from '../../actions/score';

function Header({ handleResetGame }) {
  const dispatch = useDispatch();
  const handleClickHome = (evt) => {
    evt.preventDefault();
    handleResetGame();
    dispatch(resetScore());
  };
  return (
    <header>
      <nav className="navbar navbar-expand-sm navbar-light">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <button type="button" onClick={handleClickHome}>
                <span className="nav-link button_top" href="#">
                  <NavLink to="/">Accueil</NavLink>
                  <span className="sr-only">(current)</span>
                </span>
              </button>
            </li>
            <li className="nav-item active">
              <button type="button">
                <span className="nav-link button_top" href="#">Quizz<span className="sr-only">(current)</span></span>
              </button>
            </li>
            <li className="nav-item active">
              <button type="button">
                <span className="nav-link button_top" href="#">
                  <NavLink to="/authentification">Connexion</NavLink>
                  <span className="sr-only">(current)</span>
                </span>
              </button>
            </li>
          </ul>
        </div>
        <img className="logo" src={logo} alt="logo" />
      </nav>
    </header>
  );
}

Header.propTypes = {
  handleResetGame: PropTypes.func.isRequired,
};

export default Header;
