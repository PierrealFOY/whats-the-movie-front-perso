import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

function LoginPage() {
  return (
    <div className="login_page">
      <button type="button">Connexion</button>
      <input type="text" className="login_page user" placeholder="Entrez votre nom d'utilisateur" />
      <input type="text" className="login_page password" placeholder="Entrez votre mot de passe" />
      <a href="#">Mot de passe oublié ?</a>
      <button type="button">SE CONNECTER</button>
      <button type="button">S'INSCRIRE</button>
    </div>
  );
}

LoginPage.propTypes = {};

export default LoginPage;
