import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, NavLink } from 'react-router-dom';
import { changeEmail, changePassword, submitLogin } from '../../actions/loginPageActions';

import WTM from '../../assets/WTM.png';
import './styles.scss';

function LoginPage() {
  const dispatch = useDispatch();

  const email = useSelector((state) => state.login.email);
  const handleChangeEmail = (evt) => {
    dispatch(changeEmail(evt.target.value));
  }

  const password = useSelector((state) => state.login.password);
  const handleChangePassword = (evt) => {
    dispatch(changePassword(evt.target.value));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(submitLogin());
    dispatch(changeEmail(''));
    dispatch(changePassword(''));
  };

  const logged = useSelector((state) => state.login.logged);
  const message = useSelector((state) => state.login.message);
  const loginInfos = useSelector((state) => state.login);

  useEffect(() => {
    localStorage.setItem('loginInfos', JSON.stringify(loginInfos));
  }, [logged]);

  return (
    <div className="LoginPage">
      {logged ? <Navigate to="/compte" replace />
        : (
          <form onSubmit={handleSubmit}>
            <img src={WTM} alt="WTM" />
            <div className="login-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
              </svg>
            </div>
            <div className="form-group">
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Identifiant"
                value={email}
                onChange={handleChangeEmail}
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Mot de passe"
                value={password}
                onChange={handleChangePassword}
              />
            <div className="form-message">{message}</div>
            </div>
            <button type="submit" className="btn">SE CONNECTER</button>
            <hr />
            <NavLink to="/inscription" className="btn">S'INSCRIRE</NavLink>
          </form>
        )}
    </div>
  );
}

export default LoginPage;
