import { ThemeProvider } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { nextMovie, resetGame } from '../../actions/movies';
import Header from '../Header';
import Accueil from '../Accueil';
import Results from '../Results';
import Footer from '../Footer';
import Game from '../Game';
import LoginPage from '../Login_page';
import Errors from '../Errors';

import './styles.css';

function App() {
  const dispatch = useDispatch();
  const handleResponse = () => {
    dispatch(nextMovie());
  };

  const handleResetGame = () => {
    dispatch(resetGame());
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
          <Route path="/jeu" element={<Game handleResponse={handleResponse} />} />
          <Route path="/authentification" element={<LoginPage />} />
          <Route path="/results" element={<Results handleResetGame={handleResetGame} />} />

          <Route path="*" element={<Errors />} />
          {/* Page de connexion */}
        </Routes>
        <Footer />
      </div>
    </ThemeProvider>

  );
}

export default App;
