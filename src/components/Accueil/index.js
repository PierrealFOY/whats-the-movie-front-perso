import PropTypes from 'prop-types';
import './styles.scss';
import { Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/images/logo-WTM.png';
// import Logo from '../Logo';

function Accueil({ handleBeginGame }) {
  const handleClickBeginGame = (evt) => {
    evt.preventDefault();
    handleBeginGame();
  };
  return (
    // main page
    <main className="home">
      {/* page container */}
      <div className="home__container">
        {/* Logo */}
        <img className="home__logo" src={logo} alt="Logo What's The Movie" />
        {/* <Logo /> */}
        {/* Button play */}
        <div className="home__button-container">
          <Button
            className="home__button play"
            variant="success"
            size="lg"
            onClick={handleClickBeginGame}
          >
            <NavLink to="/jeu" className="home__button-link">Jouer !</NavLink>
          </Button>
          {/* Button Login */}
          <Button
            className="home__button login"
            variant="outline-success"
            size="lg"
          >
            <NavLink to="/authentification" className="home__button-link">Connexion / Inscription</NavLink>
          </Button>
        </div>
      </div>
    </main>
  );
}

Accueil.propTypes = {
  handleBeginGame: PropTypes.func.isRequired,
};

export default Accueil;
