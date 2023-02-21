
import { ThemeProvider } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';
import Header from '../Header';
import Accueil from '../Accueil';
import LoginPage from '../Login_page';
import Results from '../Results';
import Footer from '../Footer';
import './styles.css';

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
          {/* Page de jeu */}
          <Route path="/results" element={<Results />} />
          {/* Page de connexion */}
        </Routes>
        <Footer />
      </div>
    </ThemeProvider>

  );
}

export default App;
