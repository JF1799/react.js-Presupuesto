import React, { useState } from "react";
import Pregunta from "./Componentes/Pregunta";
import Formulario from "./Componentes/Formulario";

function App() {
  //definira el state
  const [presupuesto, guardarPresupuesto] = useState(0);
  const [restante, guardarRestante] = useState(0);
  const [mostrarpregunta, actualizarPregunta] = useState(true);

  return (
    <div className="container">
      <header>
        <h1>PRESUPUESTO</h1>

        <div className="contenido-principal contenido">
          {mostrarpregunta ? (
            <Pregunta
              guardarRestante={guardarRestante}
              guardarPresupuesto={guardarPresupuesto}
              actualizarPregunta={actualizarPregunta}
            />
          ) : (
            <div className="row">
              <div className="one-half clumn">
                <Formulario />
              </div>
              <div className="one-half clumn">2</div>
            </div>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
