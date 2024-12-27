import React, { createContext, useState } from "react";

export const CarritoContext = createContext();

export const CarritoProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);

  //funcion para agregar item al carrito de compras
  const agregarProducto = (producto) => {
    const existe = carrito.find((item) => item.id === producto.id);
    if (existe) {
      setCarrito(
        carrito.map((item) =>
          item.id === producto.id
            ? { ...item, cantidad: item.cantidad + 1 }
            : item
        )
      );
    } else {
      setCarrito([...carrito, { ...producto, cantidad: 1 }]);
    }
  };

  //funcion para eliminar item del carrito de compras
  const eliminarProducto = (idProducto) => {
    setCarrito(carrito.filter((producto) => producto.id !== idProducto));
  };

  //funcion para sumar cantidad en el item de producto en el carrito de compras
  const aumentarCantidad = (idProducto) => {
    setCarrito(
      carrito.map((item) =>
        item.id === idProducto ? { ...item, cantidad: item.cantidad + 1 } : item
      )
    );
  };

  //funcion para restar cantidad en el item de producto en el carrito de compras
  const disminuirCantidad = (idProducto) => {
    setCarrito(
      carrito.map((item) =>
        item.id === idProducto && item.cantidad > 1
          ? { ...item, cantidad: item.cantidad - 1 }
          : item
      )
    );
  };

  return (
    <CarritoContext.Provider
      value={{
        carrito,
        setCarrito,
        agregarProducto,
        eliminarProducto,
        aumentarCantidad,
        disminuirCantidad,
      }}
    >
      {children}
    </CarritoContext.Provider>
  );
};
