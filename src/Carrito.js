import React, { useContext } from "react";
import { CarritoContext } from "./CarritoContext";
import { useNavigate, Link } from "react-router-dom";

const Carrito = () => {
  const { carrito, eliminarProducto, aumentarCantidad, disminuirCantidad } =
    useContext(CarritoContext);

  return (
    <div className="cart-content">
      {carrito.length > 0 ? (
        <>
          <h2>Carrito de Compras</h2>

          <Link to="/checkout">
            <button>REALIZAR EL PAGO</button>
          </Link>

          <div className="book-list">
            {carrito.map((producto) => (
              <div key={producto.id} className="cart-item">
                <img src={producto.imagen} alt={producto.title} />
                <div>
                  <p>{producto.precio} USD</p>
                  <div className="cart-item-controls">
                    <button onClick={() => disminuirCantidad(producto.id)}>
                      -
                    </button>
                    <span>{producto.cantidad}</span>
                    <button onClick={() => aumentarCantidad(producto.id)}>
                      +
                    </button>
                    <button onClick={() => eliminarProducto(producto.id)}>
                      Eliminar
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        <p>El carrito de compras está vacío.</p>
      )}
    </div>
  );
};

export default Carrito;
