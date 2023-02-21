import './style.scss';
import { Button } from 'react-bootstrap';
import logo from '../../assets/images/logo-WTM.png';
// import Logo from '../Logo';

function Accueil() {
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
          >
            Jouer !
          </Button>
          {/* Button Login */}
          <Button
            className="home__button login"
            variant="outline-success"
            size="lg"
          >
            Connexion / Inscription
          </Button>
        </div>
      </div>
    </main>
  );
}

export default Accueil;
