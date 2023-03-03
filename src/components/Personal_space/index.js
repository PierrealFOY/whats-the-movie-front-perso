import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import './styles.scss';

function PersonalSpace() {

  const logged = useSelector((state) => state.login.logged);

  //Number of game played
  const numberGame = useSelector((state) => state.login.game)

  //User's score
  const scoreUser = useSelector((state) => state.login.score)

  //User's picture
  const userPicture = useSelector((state) => state.login.picture)
if (logged) {
  return (
    <div className="stats">
      <div className="game">
        <div className="game--played">Vous avez joué {numberGame === null ? 0 : numberGame} parties</div>
        <div className="game--won">Vous avez gagné 10 parties</div>
        <div className="game--score">Votre score est de {scoreUser === null ? 0 : scoreUser} points</div>
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
