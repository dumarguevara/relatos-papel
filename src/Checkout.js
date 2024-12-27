import React, { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { CarritoContext } from "./CarritoContext";

const Checkout = () => {
  const { carrito, setCarrito } = useContext(CarritoContext);

  const history = useNavigate();

  const finalizarCompra = () => {
    alert("¡Compra finalizada con éxito!");
    setCarrito([]); // Vaciar el carrito
    history("/home"); // Redirigir a la pantalla principal
  };

  return (
    <div>
      <h2>Checkout</h2>
      {carrito.map((producto) => (
        <div key={producto.id}>
          <h3>{producto.titulo}</h3>
          <p>Precio: ${producto.precio}</p>
          <p>Cantidad: {producto.cantidad}</p>
        </div>
      ))}
      <p>
        Total: $
        {carrito.reduce(
          (total, producto) => total + producto.precio * producto.cantidad,
          0
        )}
      </p>
      <div className="check-item-controls">
        <button onClick={finalizarCompra}>Finalizar Compra</button>
        <Link to="/home">
          <button>Volver a VISTA DE BUSQUEDA</button>
        </Link>
      </div>
    </div>
  );
};

export default Checkout;
