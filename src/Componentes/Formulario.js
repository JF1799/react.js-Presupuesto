import React, { useState } from "react";
import Error from "./Error";

const Formulario = () => {
  const [nombre, guardarNombre] = useState("");
  const [cantidad, guardarCantidad] = useState(0);
  const [error, guardarError] = useState(false);
  //USUARIO AGREGA GASTO
  const agregarGasto = (e) => {
    e.preventDefault();
    //VALIDAR
    if (cantidad < 1 || isNaN(cantidad) || nombre.trim() === "") {
      guardarError(true);
      return;
    }
    guardarError(true);
    //CONSTRUIR EL GASTO

    //pasar el gasto al componente principal

    //Borrar le fomulario
  };

  return (
    <form onSubmit={agregarGasto}>
      <h2>Agrega tus gastos aqui</h2>
      {error ? <Error /> : null}
      <div className="campo">
        <label>Gasto</label>
        <input
          type="text"
          className="u-full-width"
          placeholder="Ej. tranporte"
          values={nombre}
          onChange={(e) => guardarNombre(e.target.value)}
        />
        <div className="campo">
          <label>Cantidad</label>
          <input
            type="text"
            className="u-full-width"
            placeholder="Ej. 300"
            value={cantidad}
            onChange={(e) => guardarCantidad(parseInt(e.target.value, 10))}
          />
        </div>
        <input
          type="submit"
          className="button-primary u-full-width"
          value="agregar gasto"
        />
      </div>
    </form>
  );
};

export default Formulario;
