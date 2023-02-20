import { ThemeProvider } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';
import Accueil from '../Accueil';
import './styles.css';

function App() {
  return (
    <ThemeProvider
      breakpoints={['xl', 'md', 'xs']}
      minBreakpoint="xs"
    >
      <div className="app">
        {/* Composant Header */}
        <Routes>
          <Route path="/" element={<Accueil />} />
          {/* Page de jeu */}
          {/* Page de résultats */}
          {/* Page de connexion */}
        </Routes>
        {/* Composant Footer */}
      </div>
    </ThemeProvider>
  );
}

export default App;
