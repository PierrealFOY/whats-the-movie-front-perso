import PropTypes from 'prop-types';
import './styles.scss';
import { NavLink, Navigate, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import logo from '../../assets/images/logo-WTM.png';
import { resetTimer, stopTimer, gameOff, saveGame } from '../../actions/movies';
import { resetScore } from '../../actions/score';
import { useEffect } from 'react';
import { isLogged } from '../utils';

function Results({ handleResetGame, handleReplay }) {
  const gameStarted = useSelector((state) => state.timer.gameStarted);

  if (gameStarted) {
  const dispatch = useDispatch();
  const finalScore = useSelector((state) => state.score.userScore);
  //const logged = useSelector((state) => state.login.logged);
  const logged = isLogged();
  let userRanking = 0;
  if (logged) {
    // if a user is logged,
    // we save the datas of the game
    const idUser = useSelector((state) => state.login.id);
    useEffect(() => {
      dispatch(saveGame());
    }, []);

    // getting the full ranking
    const ranking = useSelector((state) => state.ranking.classement);    
    if (ranking !== undefined) {
      // getting the current user in the ranking
      let user = ranking.find(rank => rank.id === idUser);
      if (user !== undefined) {
        // finally, getting the place of the user in the ranking,
        // with the index in the ranking array + 1
        userRanking = ranking.indexOf(user) + 1;
      }
    }
  }

  const navigate = useNavigate();
  const handleClickReplay = (evt) => {
    evt.preventDefault();
    handleResetGame();
    handleReplay();
    dispatch(resetTimer());
    dispatch(stopTimer());
    dispatch(resetScore());
    dispatch(gameOff());
    navigate('/jeu');
  };

  const handleBackHome = (evt) => {
    evt.preventDefault();
    handleResetGame();
    dispatch(resetTimer());
    dispatch(stopTimer());
    dispatch(resetScore());
    dispatch(gameOff());
    navigate('/');
  };

  return (
    <div className="results-container">
      <div className="logo">
        <img className="home-logo" src={logo} alt="Logo What's The Movie" />
      </div>
      <div className="results">
        <span className="results-bravo">Fin de partie !</span>
        <span className="results-sentence">Voici votre score total:</span>
        <span className="results-points">{finalScore} points</span>
      </div>
      {logged && userRanking !== 0 ? (
        // if the user is connected he's going to see his ranking
      <div className="ranking">
        <span className="ranking-results">Vous êtes {userRanking}{userRanking === 1 ? 'er' : 'ème'}</span>
      </div>
      ):(
        <NavLink 
          to="/authentification"
        >
          <div className="notConnected">
            <p className="notConnected-text">Inscrivez-vous ou connectez-vous afin de pouvoir<br/>enregistrer vos prochains scores et vous classer !</p>
            <button className="notConnected-subscribe">ICI</button>
          </div>
        </NavLink>
      )}
      <div className="btn">
        <button type="button" className="btn-playAgain" onClick={handleClickReplay}>          
          Rejouer          
        </button>
        <button type="button" className="btn-BackHome" onClick={handleBackHome}>
          Retour à l'accueil
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
