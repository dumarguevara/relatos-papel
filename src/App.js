import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./LandingPage";
import Home from "./Home";
import Carrito from "./Carrito";
import DetallesLibro from "./DetallesLibro";
import Checkout from "./Checkout";
import { CarritoProvider } from "./CarritoContext";
import Header from "./Header";

const App = () => {
  return (
    <CarritoProvider>
      <Router>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/home" element={<Home />} />
            <Route path="/carrito" element={<Carrito />} />
            <Route path="/detalles/:id" element={<DetallesLibro />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </div>
      </Router>
    </CarritoProvider>
  );
};

export default App;
