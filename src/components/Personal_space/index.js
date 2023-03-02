import './styles.scss';

function PersonalSpace() {
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

export default PersonalSpace;
