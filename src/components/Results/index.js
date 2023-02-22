import './styles.scss'
import logo from '../../assets/images/logo-WTM.png';
import { NavLink } from 'react-router-dom';

function Results() {
  return (
    <div className="results-container">
      <div className="logo">
        <img className="home-logo" src={logo} alt="Logo What's The Movie" />
      </div>
      <div className="results">
        <span className="results-bravo">Bravo !</span>
        <span className="results-sentence">Voici votre résultat:</span>
        <span className="results-points">455 points</span>
      </div>
      <div className="ranking">
        <span className="ranking-results">Vous êtes 7ème</span>
      </div>
      <div className="btn">
        <NavLink to="/jeu" className="btn-playAgain">Rejouer </NavLink>
        <NavLink to="/" className="btn-BackHome">Retour à l'accueil</NavLink>
      </div>
    </div>
  );
}

export default Results;
