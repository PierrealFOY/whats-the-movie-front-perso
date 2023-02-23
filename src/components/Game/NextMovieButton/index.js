/* eslint-disable no-nested-ternary */
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import './styles.scss';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { resetTimer } from '../../../actions/movies';

function NextMovieButton({ tour, handleNextMovie, userResponse }) {
  const dispatch = useDispatch();

  const handleButtonClick = (evt) => {
    evt.preventDefault();
    dispatch(resetTimer());
    handleNextMovie();
  };

  return (
    <Button
      className="responses__button col-10 col-sm-5"
      variant="outline-success"
      size="lg"
      onClick={tour !== 4 ? handleButtonClick : null}
    >
      {
        tour !== 4
          ? (
            userResponse === 'T'
              ? <p className="responses__button-text">Bonne réponse !<br />Film suivant</p>
              : <p className="responses__button-text">Mauvaise Réponse !<br />Film suivant</p>
          )
          : (
            <NavLink to="/results">
              <p className="responses__button-text">{userResponse === 'T' ? 'Bonne réponse !' : 'Mauvaise Réponse !'}<br />Voir les résultats</p>
            </NavLink>
          )
      }
    </Button>
  );
}

NextMovieButton.propTypes = {
  tour: PropTypes.number.isRequired,
  handleNextMovie: PropTypes.func.isRequired,
  userResponse: PropTypes.string.isRequired,
};

export default NextMovieButton;
