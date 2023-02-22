import './styles.scss';
import Logo404 from './../../assets/images/404.png'

function Errors() {
  return (
    <div className="error-container">
    <img className="error-logo" src={Logo404}></img>
      {/*<h1>Oops!</h1>*/}
      <div className="error-oups">
        <div>
            <h3 className="rotate">
                <span>O</span>
                <span>u</span>
                <span>p</span>
                <span>s</span>
                <span>!</span>
            </h3>
        </div>
      </div>
      <h2>Page non trouvée</h2>
      <p>La page que vous recherchez n'existe pas ou est temporairement indisponible.</p>
      <button to="/">Retour à l'accueil</button>
      <div className="error-animation"></div>
    </div>
  );
};

export default Errors;
