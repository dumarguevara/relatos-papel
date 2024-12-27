import React, { useContext } from "react";
import { useParams, Link } from "react-router-dom";
import data from "./data.json";
import "./App.css";
import Carrito from "./Carrito";
import { CarritoContext } from "./CarritoContext";

const DetallesLibro = () => {
  const { id } = useParams();
  const libro = data.find((libro) => libro.id === parseInt(id));
  const { agregarProducto } = useContext(CarritoContext);

  if (!libro) {
    return <div>Libro no encontrado</div>;
  }

  return (
    <div className="container">
      <div className="details">
        <img src={libro.imagen} alt={libro.titulo} />
        <div className="info">
          <h2>{libro.titulo}</h2>
          <p>Precio: ${libro.precio}</p>
          <button onClick={() => agregarProducto(libro)}>
            Agregar al carrito
          </button>
          <p>{libro.descripcion}</p>

          <Link to="/Home">
            <button>SEGUIR COMPRANDO</button>
          </Link>
        </div>
      </div>

      <div className="cart">
        <Carrito />
      </div>
    </div>
  );
};

export default DetallesLibro;
