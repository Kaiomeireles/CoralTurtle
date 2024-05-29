import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom'; // Alterei a importação para incluir Routes
import DashboardPage from './pages/DashboardPage';
import MapasInterativosPage from './pages/MapasInterativosPage';
import AlertasPage from './pages/AlertasPage';
import HistoriasInterativasPage from './pages/HistoriasInterativasPage';
import Footer from './components/Footer'; // Importa o componente Footer
import Nav from './components/Navbar'; // Importa o componente Nav

const App = () => {
  return (
    <Router>
      <div>
        <Nav /> {/* Renderiza a barra de navegação apenas uma vez */}
        
        <Routes> {/* Alterei Switch para Routes */}
          <Route path="/mapas" element={<MapasInterativosPage />} /> {/* Adicionei "element" para envolver os componentes */}
          <Route path="/alertas" element={<AlertasPage />} /> {/* Adicionei "element" para envolver os componentes */}
          <Route path="/historias" element={<HistoriasInterativasPage />} /> {/* Adicionei "element" para envolver os componentes */}
          <Route path="/" element={<DashboardPage />} /> {/* Adicionei "element" para envolver os componentes */}
        </Routes> {/* Alterei Switch para Routes */}

        <Footer /> {/* Renderiza o componente Footer */}
      </div>
    </Router>
  );
};

export default App;
