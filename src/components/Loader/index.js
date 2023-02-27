import './styles.scss';
import retrotv from '../../assets/images/retrotv.svg';

function Loader() {
  return (
    <div className="loader">
      <img src={retrotv} alt="Retro Tv" />
    </div>
  );
}

export default Loader;
