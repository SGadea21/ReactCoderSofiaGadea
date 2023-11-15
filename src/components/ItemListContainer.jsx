// src/components/ItemListContainer.js
    // src/components/ItemListContainer.js
import React from 'react';
import CategoryFilter from './CategoryFilter';

const ItemListContainer = ({ greeting }) => {
  return (
    <div className="container">
      
      <div className="row mt-5">
        <div className="col-md-12 text-center">
          <h2>{greeting}</h2>
        </div>
      </div>
      <div className="row">
        <div className="col-md-9">
        <div className="product-card">
          <div className="product">
                <img src="\img\torta de chocolate.jpg" alt="Pastel de Chocolate" />
                  <h3>Pastel de Chocolate</h3>
                  <p>Delicioso pastel de chocolate con un suave relleno de crema.</p>
                  <p>$400</p>
                  <button className="button">Añadir al carrito</button>
                </div>
                <div className="product">
                    <img src="/img/chessecake.jpg" alt="Cheesecake de Fresa"/>
                    <h3>Cheesecake de Fresa</h3>
                    <p>Irresistible cheesecake con un toque fresco de fresas.</p>
                    <p>$500</p>
                    <button className ="button"> Añadir al carrito</button>

                </div>
                <div className="product"> 
                    <img src="/img/alfajor con chips.jpg" alt="Alfajor con Chips de Chocolate"/>
                    <h3>Alfajor con Chips de Chocolate</h3>
                    <p>Tradicionales alfajores rellenos de dulce de leche y cubiertos con chips de chocolate.</p>
                    <p>$50</p>
                    <button className ="button"> Añadir al carrito</button>
                </div>
                <div className="product">
                    <img src="/img/lemon pie.jpg" alt="Lemon Pie"/>
                    <h3>Lemon Pie</h3>
                    <p>Exquisito pie de limón con una base crujiente y un relleno suave y refrescante de limón.</p>
                    <p>$100</p>
                    <button className ="button"> Añadir al carrito</button>

                </div>
            </div>
        </div>
        <div className="col-md-3">
          <CategoryFilter />
        </div>
      </div>
    </div>
  );
};


export default ItemListContainer;
