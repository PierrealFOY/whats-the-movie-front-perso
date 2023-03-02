import { useState } from 'react';
import { useDispatch } from 'react-redux';
import WTM from '../../assets/WTM.png';

import {
  changeEmail, submitPseudo, submitPicture, submitPassword, submitConfirmPassword,
} from '../../actions/registerPageActions';

import './styles.scss';
import { useSelector } from 'react-redux';

function RegisterForm() {
  const [pseudo, setPseudo] = useState('');
  const [picture, setPicture] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const dispatch = useDispatch();

  const email = useSelector((state) => state.register.email);
  const handleChangeEmail = (evt) => {
    dispatch(changeEmail(evt.target.value));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(submitPseudo(pseudo));
    dispatch(submitPicture(picture));
    dispatch(submitPassword(password));
    dispatch(submitConfirmPassword(confirmPassword));
    setEmail('');
    setPseudo('');
    setPicture('');
    setPassword('');
    setConfirmPassword('');
  };

  return (
    <div className="LoginPage">
      <form onSubmit={handleSubmit}>
        <img src={WTM} alt="WTM" />
        <div className="form-group">
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            placeholder="Identifiant"
            value={email}
            onChange={handleChangeEmail}
          />
        </div>
        <div className="form-group">
          <input
            type="pseudo"
            className="form-control"
            id="exampleInputPseudo1"
            placeholder="Pseudo"
            value={pseudo}
            onChange={(e) => setPseudo(e.target.value)}
          />
        </div>
        <div className="form-group">
          <input
            type="file"
            className="form-control"
            id="exampleInputPicture1"
            placeholder="Photo"
            value={picture}
            onChange={(e) => setPicture(e.target.value)}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Mot de passe"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            id="exampleInputConfirmPassword1"
            placeholder="Confirmez votre mot de passe"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="btn">VALIDER</button>
      </form>
    </div>
  );
}

export default RegisterForm;
