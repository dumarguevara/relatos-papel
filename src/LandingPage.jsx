import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const history = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      history("/home");
    }, 5000);
  }, [history]);

  return (
    <div className="landing-page">
      <h1>Bienvenido a BOOKSTORE: - - RELATOS DE PAPEL - -</h1>
      <p>Serás redirigido a la tienda en pocos segundos . . .</p>
    </div>
  );
};

export default LandingPage;
