// src/components/NavBar.js
import React from 'react';
import CartWidget from './CartWidget';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa los estilos de Bootstrap
import 'bootstrap/dist/js/bootstrap.bundle.min'; // Importa Bootstrap JavaScript

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand" href="/">Mi Tienda</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <CartWidget />
      </div>
    </nav>
  );
};
 
export default NavBar;
