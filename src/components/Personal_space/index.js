import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import styles from './styles.scss';

function PersonalSpace() {
  const logged = useSelector((state) => state.login.logged);

  if (logged) {
    return (
      <div className="stats">
        <div className="game">
          <div className="game--played">Vous avez joué 15 parties </div>
          <div className="game--won">Vous avez gagné 10 parties</div>
          <div className="game--score">Votre score est de 10 points</div>
        </div>
        <div className="ratio">Votre ratio victoire/défaite: 1</div>
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
