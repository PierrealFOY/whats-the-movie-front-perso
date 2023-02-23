import PropTypes from 'prop-types';
import './styles.scss';
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { setUserResponse } from '../../../actions/movies';

function ResponseButton({
  title,
  idResponse,
  idCurrentMovie,
}) {
  const dispatch = useDispatch();

  const setResponse = () => {
    document.querySelectorAll('.masked').forEach((element) => {
      element.classList.remove('masked');
    });
    if (idResponse === idCurrentMovie) {
      dispatch(setUserResponse('T'));
    }
    else {
      dispatch(setUserResponse('F'));
    }
  };

  /**
   * Handler of the click on the Response buttons
   * @param {*} evt
   */
  const handleButtonClick = (evt) => {
    evt.preventDefault();
    setResponse();
  };

  return (
    <Button
      className="responses__button col-10 col-sm-5"
      variant="outline-success"
      size="lg"
      onClick={handleButtonClick}
    >
      <p className="responses__button-text">{title}</p>
    </Button>
  );
}

ResponseButton.propTypes = {
  title: PropTypes.string.isRequired,
  idResponse: PropTypes.number.isRequired,
  idCurrentMovie: PropTypes.number.isRequired,
};

export default ResponseButton;
