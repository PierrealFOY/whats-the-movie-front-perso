import './style.scss';
import { Button } from 'react-bootstrap';
import logo from '../../assets/images/logo-WTM.png';

function Accueil() {
  return (
    // main page
    <main className="home">
      {/* page container */}
      <div className="home__container">
        {/* Logo */}
        <img className="home__logo" src={logo} alt="Logo What's The Movie" />
        {/* Button play */}
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
          Connexion/Inscription
        </Button>
      </div>
    </main>
  );
}

export default Accueil;
