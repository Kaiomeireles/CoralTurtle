import React from 'react';
import '../style/main.scss'; // Importa o arquivo main.scss para estilização

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <a href="/Home">
          <img src="" alt="Logo" />
        </a>
      </div>
      <ul className="nav-links">
        <li><a href="/Home">Home</a></li>
        <li><a href="/">Dashboard</a></li>
        <li><a href="/mapas-interativos">Mapas Interativos</a></li>
        <li><a href="/alertas">Alertas</a></li>
        <li><a href="/historias-interativas">Histórias Interativas</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;