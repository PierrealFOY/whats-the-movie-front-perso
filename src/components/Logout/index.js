import './styles.scss';
import { NavLink } from 'react-router-dom';
import logOutAssets from '../../assets/images/clapet.png';

function LogOut() {
  return (
    <div className="logout-container">
      <img className="logout-logo" src={logOutAssets} alt="logout" />
      <div className="logout-oups">
        <div>
          <h3 className="rotate">
            <span>B</span>
            <span>Y</span>
            <span>E</span>
            <span>-</span>
            <span>B</span>
            <span>Y</span>
            <span>E</span>
            <span>!</span>
          </h3>
        </div>
      </div>
      <h2>Vous vous êtes déconnécté</h2>
      <p>Vous allez nous manquer...</p>
      <NavLink className="logout-home" to="/">Retour à l'accueil</NavLink>
      <div className="logout-animation" />
    </div>
  );
}

export default LogOut;
