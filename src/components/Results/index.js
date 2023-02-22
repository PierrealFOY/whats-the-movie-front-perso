import PropTypes from 'prop-types';
import './styles.scss';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/images/logo-WTM.png';
import { NavLink } from 'react-router-dom';

function Results({ handleResetGame }) {
  const handleReplay = (evt) => {
    evt.preventDefault();
    handleResetGame();
  };

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
        <button type="button" className="btn-playAgain" onClick={handleReplay}>
          <NavLink
            to="/jeu"

          >
            Rejouer
          </NavLink>
        </button>
        <button type="button" className="btn-BackHome">
          <NavLink
            to="/"
          >
            Retour à l'accueil
          </NavLink>
        </button>
      </div>
    </div>
  );
}

Results.propTypes = {
  handleResetGame: PropTypes.func.isRequired,
};

export default Results;
