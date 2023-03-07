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
  const userName = useSelector((state) => state.login.name);
  const userRole = useSelector((state) => state.login.role);
  const userAdmin = 'ROLE_ADMIN';

  return (
    <header>
      <nav className="navbar navbar-expand-sm navbar-light">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown" aria-expanded="true" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <img className="logo" src={logo} alt="logo" />
        {
        logged
          ? (
            <div className="nav-user">
              <span className="nav-user-name">Bonjour<br/>{userName} !</span>
            </div>
            )
          : undefined
        }         
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item active">              
              <button type="button" onClick={handleClickHome}>
                <NavLink to="/">
                  <span className="nav-link button_top">
                    Accueil
                    <span className="sr-only">(current)</span>
                  </span>
                </NavLink>
              </button>
            </li>
            {
            logged
              ? (
                <>
                <li className="nav-item active">
                  <NavLink to="/compte">
                    <button type="button">
                      <span className="nav-link button_top">
                        Mon compte
                        <span className="sr-only">(current)</span>
                      </span>
                    </button>
                  </NavLink>
                </li>
                <li className="nav-item active">
                  <NavLink to="/compte/ajout-film">
                    <button type="button">
                      <span className="nav-link button_top">
                        Ajouter un film
                        <span className="sr-only">(current)</span>
                      </span>
                    </button>
                  </NavLink>
                </li>
                </>
              )
              : (
                <li className="nav-item active">
                  <NavLink to="/authentification">
                    <button type="button">
                      <span className="nav-link button_top">
                        Connexion
                        <span className="sr-only">(current)</span>
                      </span>
                    </button>
                  </NavLink>
                </li>
              )
            }
            {
              logged
              ? (
                <li className="nav-item active">
                  <NavLink to="/">
                    <button
                      type="button"
                      onClick={userLogout}
                    >
                      
                        <span className="nav-link button_top">
                          Deconnexion
                          <span className="sr-only">(current)</span>
                        </span>                    
                    </button>
                  </NavLink>
                </li>
              )
              : undefined
            }

            {
              logged && userRole === userAdmin ?
              (
                <li className="nav-item active">
                  <NavLink to="http://localhost:8081/" target="_blank">
                    <button
                      type="button"
                    >                    
                        <span className="nav-link button_top">
                          Accéder au back-office
                          <span className="sr-only">(current)</span>
                        </span>                    
                    </button>
                  </NavLink>
                </li>
              )
              : undefined
            }
          </ul>         
        </div>        
      </nav>      
    </header>
  );
}

Header.propTypes = {
  handleResetGame: PropTypes.func.isRequired,
};

export default Header;
