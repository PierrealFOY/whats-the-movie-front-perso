import { ThemeProvider } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {
  getMovies,
  getMoviesResponses,
  nextMovie,
  resetGame,
} from '../../actions/movies';
import Header from '../Header';
import Accueil from '../Accueil';
import Results from '../Results';
import Footer from '../Footer';
import Game from '../Game';
import LoginPage from '../Login_page';
import Errors from '../Errors';

import './styles.css';
import RegisterForm from '../Login_register';

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

  const getMoviesResponsesForButtons = (test) => {
    dispatch(getMoviesResponses(test));
  };

  return (
    <ThemeProvider
      breakpoints={['xl', 'md', 'xs']}
      minBreakpoint="xs"
    >
      <div className="app">
        <Header handleResetGame={handleResetGame} />
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/jeu" element={<Game handleBeginGame={handleBeginGame} handleNextMovie={handleNextMovie} getResponses={getMoviesResponsesForButtons} />} />
          <Route path="/authentification" element={<LoginPage />} />
          <Route path="/inscription" element={<RegisterForm />} />

          <Route path="/results" element={<Results handleResetGame={handleResetGame} handleReplay={handleBeginGame} />} />
          <Route path="*" element={<Errors />} />
        </Routes>
        <Footer />
      </div>
    </ThemeProvider>

  );
}

export default App;
