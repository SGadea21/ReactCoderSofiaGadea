
import React from 'react';

const CategoryFilter = () => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Filtrar por Categoría</h5>
        <form>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="alfajores" />
            <label className="form-check-label" htmlFor="alfajores">
              Alfajores
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="postres" />
            <label className="form-check-label" htmlFor="postres">
              Postres
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="tortas" />
            <label className="form-check-label" htmlFor="tortas">
              Tortas
            </label>
          </div>
        </form>
        <div className="mt-3">
          <button className="btn btn-outline-primary">Buscar</button>
        </div>
      </div>
    </div>
  );
};

export default CategoryFilter;
