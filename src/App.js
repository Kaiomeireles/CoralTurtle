import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DashboardPage from './pages/DashboardPage';
import Graficos from './pages/Graficos';
import AlertasPage from './pages/AlertasPage';
import CoralGuard from './pages/CoralGuard';
import Footer from './components/Footer';
import Nav from './components/Navbar';
import HomePage from './pages/HomePage';

const App = () => {
  return (
    <Router>
      <div>
        <Nav />
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/graficos" element={<Graficos />} />
          <Route path="/alertas" element={<AlertasPage />} />
          <Route path="/coralguard" element={<CoralGuard />} />
          <Route path="/" element={<DashboardPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
