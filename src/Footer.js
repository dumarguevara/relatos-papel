import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; 2024 Tienda de Libros. Todos los derechos reservados.</p>
      <p>
        <a
          href="https://wa.me/1234567890"
          target="_blank"
          rel="noopener noreferrer"
        >
          Contáctanos en WhatsApp
        </a>{" "}
        |
        <a
          href="https://www.facebook.com/librairiesagabookstore"
          target="_blank"
          rel="noopener noreferrer"
        >
          Síguenos en Facebook
        </a>
      </p>
    </footer>
  );
};

export default Footer;
