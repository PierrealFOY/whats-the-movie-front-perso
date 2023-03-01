import PropTypes from 'prop-types';
import './styles.scss';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { handleLogout } from '../../actions/loginPageActions';
import { resetScore } from '../../actions/score';
import { stopTimer, gameOff } from '../../actions/movies';

import logo from './logo.png';

function Header({ handleResetGame }) {
  const dispatch = useDispatch();
  const handleClickHome = (evt) => {
    evt.preventDefault();
    handleResetGame();
    dispatch(resetScore());
    dispatch(stopTimer());
    dispatch(gameOff());
  };

  const userLogout = () => {
    dispatch(handleLogout());
  };

  const logged = useSelector((state) => state.login.logged);

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
              <button type="button" onClick={handleClickHome}>
                <span className="nav-link button_top" href="#">Quizz<span className="sr-only">(current)</span></span>
              </button>
            </li>
            {logged
              ? (
                <li className="nav-item active">
                  <button type="button">
                    <span className="nav-link button_top" href="#">
                      <NavLink to="/compte">Mon compte</NavLink>
                      <span className="sr-only">(current)</span>
                    </span>
                  </button>
                </li>
              )
              : (
                <li className="nav-item active">
                  <button type="button">
                    <span className="nav-link button_top" href="#">
                      <NavLink to="/authentification">Connexion</NavLink>
                      <span className="sr-only">(current)</span>
                    </span>
                  </button>
                </li>
              )}

            {logged
              ? (
                <li className="nav-item active">
                  <button
                    type="button"
                    onClick={userLogout}
                  >
                    <NavLink to="/authentification">
                      <span className="nav-link button_top" href="#">
                        Deconnexion
                        <span className="sr-only">(current)</span>
                      </span>
                    </NavLink>
                  </button>
                </li>
              )
              : null}
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
