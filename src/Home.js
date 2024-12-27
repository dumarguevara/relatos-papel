import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import data from "./data.json";
import "./App.css";
import Carrito from "./Carrito";

const Home = () => {
  const [libros, setLibros] = useState([]);
  const [filtroTitulo, setFiltroTitulo] = useState("");
  const history = useNavigate();

  useEffect(() => {
    setLibros(data);
  }, []);

  const verDetalles = (libro) => {
    history(`/detalles/${libro.id}`);
  };

  const filtrarLibros = (libros, titulo) => {
    return libros.filter((libro) =>
      libro.titulo.toLowerCase().includes(titulo.toLowerCase())
    );
  };

  const librosFiltrados = filtrarLibros(libros, filtroTitulo);

  return (
    <div className="container">
      <div className="book-list">
        <input
          type="text"
          placeholder="Buscar por título"
          value={filtroTitulo}
          onChange={(e) => setFiltroTitulo(e.target.value)}
        />

        {librosFiltrados.map((libro) => (
          <div
            key={libro.id}
            onClick={() => verDetalles(libro)}
            className="book-item"
          >
            <img
              src={libro.imagen}
              alt={libro.titulo}
              style={{ cursor: "pointer" }}
            />
            <h2>{libro.titulo}</h2>
            <p>Precio: ${libro.precio}</p>
          </div>
        ))}
      </div>

      <div className="cart">
        <Carrito />
      </div>
    </div>
  );
};

export default Home;
