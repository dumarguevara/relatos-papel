// src/Header.js
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <h1>RELATOS DE PAPEL: BOOKSTORE</h1>
      <nav>
        <Link to="/home">Inicio</Link>
        <Link to="/carrito">Carrito</Link>
      </nav>
    </header>
  );
};

export default Header;
