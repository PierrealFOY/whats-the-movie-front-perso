import PropTypes from 'prop-types';
import './styles.scss';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { handleLogout } from '../../actions/loginPageActions';
import { resetScore } from '../../actions/score';
import { stopTimer, gameOff } from '../../actions/movies';

import logo from './logo.png';
import { getUserRole } from '../utils';

function Header({ handleResetGame }) {
  const dispatch = useDispatch();

  const handleClickHome = (evt) => {
    evt.preventDefault();
    handleResetGame();
    dispatch(resetScore());
    dispatch(stopTimer());
    dispatch(gameOff());
  };
  
  let navigate = useNavigate();
  const userLogout = (e) => {
    e.preventDefault();
    localStorage.clear();
    dispatch(handleLogout());    
    navigate('/logout');
  };
  
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  const logged = useSelector((state) => state.login.logged);
  const userName = useSelector((state) => state.login.name);
  const userRole = getUserRole();
  const userAdmin = 'ROLE_ADMIN';

  return (
    <header>
      <nav className={`navbar navbar-expand-${logged === true ? "md" : "sm"} navbar-light`}>
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
              <button type="button" data-toggle={isMobile ? "collapse" : ""} data-target=".navbar-collapse.show" onClick={handleClickHome}>
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
                  <button type="button" data-toggle={isMobile ? "collapse" : ""} data-target=".navbar-collapse.show">
                    <NavLink className="link" to="/compte">
                      <span className="nav-link button_top">
                        Mon compte
                        <span className="sr-only">(current)</span>
                      </span>
                    </NavLink>
                  </button>
                </li>
                </>
              )
              : (
                <li className="nav-item active">
                    <button type="button" data-toggle={isMobile ? "collapse" : ""} data-target=".navbar-collapse.show">
                      <NavLink to="/authentification">
                        <span className="nav-link button_top">
                          Connexion
                          <span className="sr-only">(current)</span>
                        </span>
                      </NavLink>
                    </button>
                </li>
              )
            }
            {
              logged
              ? (
                <li className="nav-item active">
                    <button
                      type="button"
                      data-toggle={isMobile ? "collapse" : ""} 
                      data-target=".navbar-collapse.show"
                      onClick={userLogout}
                    >
                      <NavLink to="/">                      
                        <span className="nav-link button_top">
                          Deconnexion
                          <span className="sr-only">(current)</span>
                        </span>
                      </NavLink>                    
                    </button>
                </li>
              )
              : undefined
            }

            {
              logged && userRole === userAdmin ?
              (
                <li className="nav-item active">
                    <button
                      data-toggle={isMobile ? "collapse" : ""} 
                      data-target=".navbar-collapse.show"
                      type="button"
                    >
                      <NavLink to="https://jean-christophemartin-server.eddi.cloud/" target="_blank">                    
                        <span className="nav-link button_top">
                          Accéder au back-office
                          <span className="sr-only">(current)</span>
                        </span>
                      </NavLink>                    
                    </button>
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
