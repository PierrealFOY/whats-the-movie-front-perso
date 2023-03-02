import './styles.scss';
import logoDenied from '../../../assets/images/restricted-area.png';
import { NavLink } from 'react-router-dom';

function ErrorLogin() {
  return (
    <div className="error-container">
      <img className="error-logo" src={logoDenied} />
      <div className="error-oups">
        <div>
          <h3 className="rotate">
            <span>O</span>
            <span>u</span>
            <span>p</span>
            <span>s</span>
            <span>!</span>
          </h3>
        </div>
      </div>
      <h2>Accès refusé !</h2>
      <p>Vous devez être connecté pour accéder à cette page.</p>
      <div className="error-buttons">
        <NavLink className="error-home btn-error" to="/authentification">Connexion</NavLink>
        <NavLink className="error-home btn-error" to="/inscription">Inscription</NavLink>
        <NavLink className="error-home btn-error" to="/">Accueil</NavLink>
      </div>      
    </div>
  );
}

export default ErrorLogin;
