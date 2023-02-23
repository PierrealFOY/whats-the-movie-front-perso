import PropTypes from 'prop-types';
import './styles.scss';
import { Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

function ResponseButton({
  tour,
  title,
  handleResponse,
}) {
  /**
   * Handler of the click on the Response buttons
   * @param {*} evt
   */
  const handleButtonClick = (evt) => {
    evt.preventDefault();
    handleResponse();
  };

  return (
    <Button
      className="responses__button col-10 col-sm-5"
      variant="outline-success"
      size="lg"
      onClick={tour !== 4 ? handleButtonClick : null}
    >
      {
        tour === 4
          ? <NavLink to="/results"><p className="responses__button-text">{title}</p></NavLink>
          : <p className="responses__button-text">{title}</p>
      }
    </Button>
  );
}

ResponseButton.propTypes = {
  tour: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  handleResponse: PropTypes.func.isRequired,
};

export default ResponseButton;
