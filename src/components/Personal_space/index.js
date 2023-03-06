import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { fetchClassementRequest } from '../../actions/ranking';
import { Button } from 'react-bootstrap';

import './styles.scss';
import { NavLink } from 'react-router-dom';

function PersonalSpace() {

  const logged = useSelector((state) => state.login.logged);

  //Number of game played
  const numberGame = useSelector((state) => state.login.game)

  //User's score
  const scoreUser = useSelector((state) => state.login.score)

  //User's picture
  const userPicture = useSelector((state) => state.login.picture)

  //All users
  const ranking = useSelector((state) => state.ranking.classement);
  console.log(ranking)

  //User's name
  const userName = useSelector((state) => state.login.name)
  
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchClassementRequest());
  }, []);

if (logged) {
  return (
    <div className="stats">
      <div className="game">
        <div className="game--played">Vous avez joué {numberGame === null ? 0 : numberGame} parties</div>
        <div className="game--won">Vous avez gagné 10 parties</div>
        <div className="game--score">Votre score est de {scoreUser === null ? 0 : scoreUser} points</div>
       </div>
        <NavLink to="/compte/ajout-film">
          <Button 
            className="Button"
            variant="success"
            size="lg"
            >
            <span>Ajoutez un film </span>
          </Button>
        </NavLink>
      <div className="ranking">
        <h1>
          <svg className="ico-cup">
          {/* img a placé */}
          </svg>
          Classement
        </h1>
        <ol>
        {ranking.map((player) => (
          <li key={player.id} className={`ranking--player ${player.name === userName ? 'display' : ''}`}>
              <mark className="ranking--info">{player.name} </mark>
              <small className="ranking--info">{player.score} </small>
              <span className="ranking--label">Nombre de parties: <span className="ranking--info">{player.numberGame} </span></span>
          </li>
        ))}
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
