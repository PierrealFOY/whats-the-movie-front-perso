import { useSelector } from 'react-redux';

import './styles.scss';

function PersonalSpace() {

  const numberGame = useSelector((state) => state.login.game)

  return (
    <div className="stats">
      <div className="game">
        <div className="game--played">Vous avez joué {numberGame === null ? 0 : numberGame} parties</div>
        <div className="game--won">Vous avez gagné 10 parties</div>
        <div className="game--score">Votre score est de 10 points</div>
      </div>
      <div className="ratio">Votre ratio victoire/défaite: 1</div>
    </div>
  );
}

export default PersonalSpace;
