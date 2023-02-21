import './styles.scss'
import logo from './logo.png'

function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand-sm navbar-light">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item active">
            <button>
              <span className="nav-link button_top" href="#">Accueil<span className="sr-only">(current)</span></span>
            </button>
            </li>
            <li className="nav-item active">
            <button>
              <span className="nav-link button_top" href="#">Quizz<span className="sr-only">(current)</span></span>
            </button>
            </li>
            <li className="nav-item active">
            <button>
              <span className="nav-link button_top" href="#">Connexion<span className="sr-only">(current)</span></span>
            </button>
            </li>
          </ul>
        </div>
        <img className='logo' src={logo} alt="image" />
      </nav>
    </header>
  );
}

export default Header;
