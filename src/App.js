import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DashboardPage from './pages/DashboardPage';
import MapasInterativosPage from './pages/MapasInterativosPage';
import AlertasPage from './pages/AlertasPage';
import HistoriasInterativasPage from './pages/HistoriasInterativasPage';
import Footer from './components/Footer';
import Nav from './components/Navbar';
import DashboardCard from './components/DashboardCard';
import HomePage from './pages/HomePage';

const App = () => {
  return (
    <Router>
      <div>
        <Nav />

        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/mapas" element={<MapasInterativosPage />} />
          <Route path="/alertas" element={<AlertasPage />} />
          <Route path="/historias" element={<HistoriasInterativasPage />} />
          <Route path="/" element={<DashboardPage />} />
        </Routes>


        <Footer />
      </div>
    </Router>
  );
};

export default App;
