import { useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import WTM from '../../assets/WTM.png';
import {
  changeEmail, changePseudo, changePicture, changePassword, changeConfirmPassword, submitRegister,
} from '../../actions/registerPageActions';
import './styles.scss';

function RegisterForm() {

  const successRegister = useSelector((state) => state.register.successRegister);

    const dispatch = useDispatch();

    const email = useSelector((state) => state.register.email);
    const handleChangeEmail = (evt) => {
      dispatch(changeEmail(evt.target.value));
    }

    const pseudo = useSelector((state) => state.register.pseudo);
    const handleChangePseudo = (evt) => {
      dispatch(changePseudo(evt.target.value));
    }

    const picture = useSelector((state) => state.register.picture);
    const handleChangePicture = (evt) => {
      dispatch(changePicture(evt.target.value));
    }

    const password = useSelector((state) => state.register.password);
    const handleChangePassword = (evt) => {
      dispatch(changePassword(evt.target.value));
    }

    const confirmPassword = useSelector((state) => state.register.confirmPassword);
    const handleChangeConfirmPassword = (evt) => {
      dispatch(changeConfirmPassword(evt.target.value));
    } 

    const handleSubmit = (e) => {
      e.preventDefault();
      if (password === confirmPassword) {
        dispatch(submitRegister());
      }
    };

    return (
      <div className="LoginPage">
        {
          successRegister
          ? <Navigate to="/authentification" replace /> 
          : (
            <form onSubmit={handleSubmit} className="LoginPage-form">
              <img src={WTM} alt="WTM" />
              <h1 className="LoginPage-title">Inscription</h1>
              <div className="form-group">
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  placeholder="Email"
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
                  onChange={handleChangePseudo}
                />
              </div>
              {/* <div className="form-group">
                <input
                  type="file"
                  className="form-control"
                  id="exampleInputPicture1"
                  placeholder="Photo"
                  value={picture}
                  onChange={handleChangePicture}
                />
              </div> */}
              <div className="form-group">
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Mot de passe"
                  value={password}
                  onChange={handleChangePassword}
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputConfirmPassword1"
                  placeholder="Confirmez votre mot de passe"
                  value={confirmPassword}
                  onChange={handleChangeConfirmPassword}
                />
              </div>
              {
                password !== confirmPassword
                  ? (
                    <div className="form-group alert alert-danger" role="alert">
                      Les mots de passe ne sont pas identiques !
                    </div>
                  )
                  : undefined
              }
              <button type="submit" className="btn">VALIDER</button>
            </form>
          )
        }
      </div>
    );
}

export default RegisterForm;
