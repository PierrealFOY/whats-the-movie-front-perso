import PropTypes from 'prop-types';
import './styles.scss';
import { NavLink, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import logo from '../../assets/images/logo-WTM.png';
import { resetTimer, stopTimer, gameOff } from '../../actions/movies';
import { resetScore } from '../../actions/score';

function Results({ handleResetGame, handleReplay }) {
  const gameStarted = useSelector((state) => state.timer.gameStarted);

  if (gameStarted) {
  const dispatch = useDispatch();
  const finalScore = useSelector((state) => state.score.userScore);
  const logged = useSelector((state) => state.login.logged);

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
      {logged ? (
        // if the user is connected he's going to see his ranking
      <div className="ranking">
        <span className="ranking-results">Vous êtes 7ème</span>
      </div>
      ):(
        <NavLink 
          to="/authentification"
        >
          <div className="notConnected">
            <p className="notConnected-text">Inscrivez vous ou connectez vous afin de pouvoir vous classez !</p>
            <button className="notConnected-subscribe">ICI</button>
          </div>
        </NavLink>
      )}
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
  else {
    return (
      <Navigate to="/error" replace />
    );
  }
}

Results.propTypes = {
  handleResetGame: PropTypes.func.isRequired,
  handleReplay: PropTypes.func.isRequired,
};

export default Results;
