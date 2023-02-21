import './styles.scss';
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getMovies } from '../../actions/movies';

function Game() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMovies());
  }, []);
  const movie = useSelector((state) => state.movies.movies);
  console.log(movie);

  return (
    <div className="game">
      <div className="game__container">
        <div className="game__score">
          <h1 className="game__score-text">Score : 0 points</h1>
        </div>
        <div className="game__affiche">
          Affiche du film
          {/* affiche du film */}
        </div>
        <div className="game__indices">
          <div className="game__indices-container">
            <p className="game__indices-title">Réalisateur(s) : </p>
            <div className="game__indices-items">
              <p className="game__indices-item masked">James Cameron</p>
            </div>
          </div>
          <div className="game__indices-container">
            <p className="game__indices-title">Année de sortie : </p>
            <p className="game__indices-item masked">2023</p>
          </div>
          <div className="game__indices-container">
            <p className="game__indices-title">Pays de production : </p>
            <div className="game__indices-items">
              <p className="game__indices-item masked">Etats-Unis</p>
            </div>
          </div>
          <div className="game__indices-container">
            <p className="game__indices-title">Acteurs/Actrices : </p>
            <div className="game__indices-items">
              <p className="game__indices-item masked">Sam Worthington</p>
              <p className="game__indices-item masked">Zoe Saldana</p>
              <p className="game__indices-item masked">Sigourney Weaver</p>
              <p className="game__indices-item masked">Kate Winslet</p>
              <p className="game__indices-item masked">Michelle Rodriguez</p>
            </div>
          </div>
          <div className="game__indices-container">
            <p className="game__indices-title">Studio(s) de production : </p>
            <div className="game__indices-items">
              <p className="game__indices-item masked">20th Century Fox</p>
            </div>
          </div>
          <div className="game__indices-container">
            <p className="game__indices-title">Genre(s) : </p>
            <div className="game__indices-items">
              <p className="game__indices-item masked">Science-Fiction</p>
              <p className="game__indices-item masked">Action</p>
            </div>
          </div>
        </div>
        <div className="game__responses">
          <Button
            className="game__responses-button col-10 col-sm-5"
            variant="outline-success"
            size="lg"
          >
            Matrix
          </Button>
          <Button
            className="game__responses-button col-10 col-sm-5"
            variant="outline-success"
            size="lg"
          >
            La Soupe Aux Choux
          </Button>
          <Button
            className="game__responses-button col-10 col-sm-5"
            variant="outline-success"
            size="lg"
          >
            Avatar 2
          </Button>
          <Button
            className="game__responses-button col-10 col-sm-5"
            variant="outline-success"
            size="lg"
          >
            Camping
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Game;
