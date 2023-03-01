import PropTypes from 'prop-types';
import './styles.scss';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import logo from '../../assets/images/logo-WTM.png';
import { resetTimer, stopTimer, gameOff } from '../../actions/movies';
import { resetScore } from '../../actions/score';

function Results({ handleResetGame, handleReplay }) {
  const dispatch = useDispatch();
  const finalScore = useSelector((state) => state.score.userScore);

  const handleClickReplay = (evt) => {
    evt.preventDefault();
    handleResetGame();
    handleReplay();
    dispatch(resetTimer());
    dispatch(stopTimer());
    dispatch(resetScore());
    dispatch(gameOff());
  };

  const handleBackHome = (evt) => {
    evt.preventDefault();
    handleResetGame();
    dispatch(resetTimer());
    dispatch(stopTimer());
    dispatch(resetScore());
    dispatch(gameOff());
  };

  return (
    <div className="results-container">
      <div className="logo">
        <img className="home-logo" src={logo} alt="Logo What's The Movie" />
      </div>
      <div className="results">
        <span className="results-bravo">Bravo !</span>
        <span className="results-sentence">Voici votre résultat:</span>
        <span className="results-points">{finalScore} points</span>
      </div>
      <div className="ranking">
        <span className="ranking-results">Vous êtes 7ème</span>
      </div>
      <div className="btn">
        <button type="button" className="btn-playAgain" onClick={handleClickReplay}>
          <NavLink
            to="/jeu"

          >
            Rejouer
          </NavLink>
        </button>
        <button type="button" className="btn-BackHome" onClick={handleBackHome}>
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
  handleReplay: PropTypes.func.isRequired,
};

export default Results;
