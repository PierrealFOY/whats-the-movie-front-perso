import './style.scss';

function Logo() {
  return (
    <div className="logo__container">
      <div className="test">
        <div className="logo__back">
          <div className="logo__back-container"><p className="back top">What's</p></div>
          <div className="logo__back-container"><p className="back center">The</p></div>
          <div className="logo__back-container"><p className="back bottom">Movie?</p></div>
        </div>
        <div className="logo__front">
          <div className="logo__front-container"><p className="front top">What's</p></div>
          <div className="logo__front-container"><p className="front center">The</p></div>
          <div className="logo__front-container"><p className="front bottom">Movie?</p></div>
        </div>
      </div>
    </div>
  );
}

export default Logo;
