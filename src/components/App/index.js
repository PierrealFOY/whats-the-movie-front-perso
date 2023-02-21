import { ThemeProvider } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';
import Header from '../Header';
import Accueil from '../Accueil';
import './styles.css';
import Game from '../Game';

function App() {
  return (
    <ThemeProvider
      breakpoints={['xl', 'md', 'xs']}
      minBreakpoint="xs"
    >
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/jeu" element={<Game />} />
          {/* Page de résultats */}
          {/* Page de connexion */}
        </Routes>
        {/* Composant Footer */}
      </div>
    </ThemeProvider>
  );
}

export default App;
