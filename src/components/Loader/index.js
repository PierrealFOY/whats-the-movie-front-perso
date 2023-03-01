import './styles.scss';
import retrotv from '../../assets/images/retrotv.svg';

function Loader() {
  return (
    <div className="loader-container">
      <div className="loader">
        <img src={retrotv} alt="Retro Tv" />
      </div>
    </div>
  );
}

export default Loader;
