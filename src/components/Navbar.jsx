import React from 'react';
import '../style/main.scss'; // Importa o arquivo main.scss para estilização

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <a href="/Home">
          <img src="Coralturtle-removebg-preview.png" alt="Logo" />
        </a>
      </div>
      <ul className="nav-links">
        <li><a href="/Home">Home</a></li>
        <li><a href="/Coralguard">CoralGuard</a></li>
        <li><a href="/">Dashboard</a></li>
        <li><a href="/graficos">Gráficos</a></li>
        

      </ul>
    </nav>
  );
}

export default Navbar;