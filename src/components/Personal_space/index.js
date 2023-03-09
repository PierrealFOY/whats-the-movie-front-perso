import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { fetchClassementRequest } from '../../actions/ranking';
import { Button } from 'react-bootstrap';

import './styles.scss';
import { NavLink } from 'react-router-dom';

function PersonalSpace() {

  const logged = useSelector((state) => state.login.logged);

  const idPlayer = useSelector((state) => state.login.id);

  //Number of game played
  let numberGame = useSelector((state) => state.login.game);

  //User's score
  let scoreUser = useSelector((state) => state.login.score);

  //All users
  const ranking = useSelector((state) => state.ranking.classement);

  if (ranking !== undefined) {
    // we find the user connected in the ranking
    let user = ranking.find(rank => rank.id === idPlayer);
    if (user !== undefined) {
      // we get his number of games and his score
      numberGame = user.numberGame;
      scoreUser = user.score;
    }
  }

  //User's name
  const userName = useSelector((state) => state.login.name);
  
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchClassementRequest());
  }, []);

if (logged) {
  return (
    <div className="stats">
      <div className="stats--btn">
        <Button 
          className="Button"
          variant="success"
          size="lg"
          >
          <NavLink to="/jeu" className="stats__link-play">
            <span>Jouer</span>
          </NavLink>
        </Button>
        <Button 
          className="Button"
          variant="success"
          size="lg"
          >
          <NavLink to="/compte/ajout-film" className="stats__link-add">
            <span>Ajouter un film</span>
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="none">
              <style>{`@keyframes slide-right{0%{transform:translateY(0)}to{transform:translateY(1px)}}`}</style>
              <path fill="#265BFF" d="M12.75 6.432a.75.75 0 00-1.5 0h1.5zm-1.5 6a.75.75 0 001.5 0h-1.5zm-1.22-2.53a.75.75 0 10-1.06 1.06l1.06-1.06zm1.97 3.03l-.53.53a.75.75 0 001.06 0l-.53-.53zm3.03-1.97a.75.75 0 00-1.06-1.06l1.06 1.06zm-3.78-4.53v6h1.5v-6h-1.5zm-2.28 4.53l2.5 2.5 1.06-1.06-2.5-2.5-1.06 1.06zm3.56 2.5l2.5-2.5-1.06-1.06-2.5 2.5 1.06 1.06z" style={{animation: "slide-right .5s cubic-bezier(1,-.43,.68,.57) infinite alternate both"}} />
              <path stroke="#0A0A30" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 17.274h8" />
            </svg>
          </NavLink>
        </Button>
      </div>
      <div className="title">
        <h1 className="title--stats">
          Vos statistiques :
        </h1>
      </div>
      <div className="game">
        <div className="game--played">Vous avez joué <span className="number">{numberGame === null ? 0 : numberGame}</span> parties</div>
        {/* <div className="game--won">Vous avez gagné 10 parties</div> */}
        <div className="game--score">Votre score est de <span className="number">{scoreUser === null ? 0 : scoreUser}</span> points</div>
       </div>
      <div className="ranking">
        <h1 className="ranking--header">
          <svg width="24px" height="24px" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 19H9V8.6a.6.6 0 01.6-.6h4.8a.6.6 0 01.6.6V19zM15 5H9M20.4 19H15v-3.9a.6.6 0 01.6-.6h4.8a.6.6 0 01.6.6v3.3a.6.6 0 01-.6.6zM9 19v-5.9a.6.6 0 00-.6-.6H3.6a.6.6 0 00-.6.6v5.3a.6.6 0 00.6.6H9"
              stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span>Classement</span>
          <span>Score</span>
        </h1>
        <ol>
        {
          ranking !== undefined ? (
          ranking.map((player) => (
            <li key={player.id} className={`ranking--player ${player.name === userName ? 'display' : ''}`}>
                <mark className="ranking--info">{player.name} </mark>
                <small className="ranking--info">{player.score} </small>
                <span className="ranking--label">Nombre de parties : <span className="ranking--info">{player.numberGame} </span></span>
            </li>
          ))
          ) : undefined
        }
        </ol>
      </div>
     </div>
    );
  }
  else {
    return (
      <Navigate to="/no-login" replace />
    );
  }
}

export default PersonalSpace;
