import React from 'react';
import '../style/main.scss'; // Importa o arquivo main.scss para estilização

function Navbar() {
  return (
    <nav>
      <ul>
        <li><a href="/">Dashboard</a></li>
        <li><a href="/mapas-interativos">Mapas Interativos</a></li>
        <li><a href="/alertas">Alertas</a></li>
        <li><a href="/historias-interativas">Histórias Interativas</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;