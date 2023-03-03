import PropTypes from 'prop-types';
import './styles.scss';
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { stopTimer, resetFalseAnswer, setUserResponse } from '../../../actions/movies';
import { addScore } from '../../../actions/score';

function ResponseButton({
  title,
  idResponse,
  idCurrentMovie,
}) {
  const dispatch = useDispatch();
  const score = useSelector((state) => state.timer.score);

  /**
   * setting the right or false state depending on the answer chosen by the user
   */
  const setResponse = () => {
    if (idResponse === idCurrentMovie) {
      // correct answer
      dispatch(setUserResponse('T'));
      dispatch(addScore(score));
    }
    else {
      // false answer
      dispatch(setUserResponse('F'));
      // stop the timer and set the score to zero
      dispatch(resetFalseAnswer());
    }
  };

  /**
   * Handler of the click on the Response buttons
   * @param {*} evt
   */
  const handleButtonClick = (evt) => {
    evt.preventDefault();
    setResponse();
    dispatch(stopTimer());
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
