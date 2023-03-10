import { ThemeProvider } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

import {
  getMovies,
  nextMovie,
  resetGame,
} from '../../actions/movies';

import { handleSuccessfulAuth } from '../../actions/loginPageActions';

import Header from '../Header';
import Accueil from '../Accueil';
import Results from '../Results';
import Footer from '../Footer';
import Game from '../Game';
import LoginPage from '../Login_page';
import Errors from '../Errors';

import './styles.scss';
import RegisterForm from '../Login_register';
import AddMovies from '../Add_movies';
import PersonalSpace from '../Personal_space';
import ErrorLogin from '../Errors/ErrorLogin';
import Copyright from '../Copyright/copyright';
import LogOut from '../Logout';

function App() {
  const dispatch = useDispatch();

  const handleNextMovie = () => {
    dispatch(nextMovie());
  };

  const handleResetGame = () => {
    dispatch(resetGame());
  };

  const handleBeginGame = () => {
    dispatch(getMovies());
  };

  useEffect(() => {
    const loginInfos = JSON.parse(localStorage.getItem('loginInfos'));
    if (loginInfos) {
      dispatch(handleSuccessfulAuth(
        loginInfos.token,
        loginInfos.id,
        loginInfos.name,
        loginInfos.numberGame,
        loginInfos.score,
        loginInfos.picture,
        loginInfos.role[0],
      ));
    }
  }, []); 

  return (
    <ThemeProvider
      breakpoints={['xl', 'md', 'xs']}
      minBreakpoint="xs"
    >
      <div className="app">
        <Header handleResetGame={handleResetGame} />
          <div className="global-container">
            <Routes>
              <Route path="/" element={<Accueil />} />
              <Route path="/copyright" element={<Copyright />} />
              <Route path="/jeu" element={<Game handleBeginGame={handleBeginGame} handleNextMovie={handleNextMovie} />} />
              <Route path="/authentification" element={<LoginPage />} />
              <Route path="/compte" element={<PersonalSpace />} />
              <Route path="/no-login" element={<ErrorLogin />} />
              <Route path="/inscription" element={<RegisterForm />} />
              <Route path="/results" element={<Results handleResetGame={handleResetGame} handleReplay={handleBeginGame} />} />
              <Route path="/compte/ajout-film" element={<AddMovies />} />
              <Route path="/logout" element={<LogOut />} />
              <Route path="*" element={<Errors />} />
            </Routes>
          </div>
        <Footer />
      </div>
    </ThemeProvider>

  );
}

export default App;
