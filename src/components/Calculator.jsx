import React, { useState } from "react";

function Calculator() {
  // Crear un array del 1 al 9
  const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  // Estado para almacenar los números y símbolos presionados
  const [operacion, setOperacion] = useState("");

  const listaNumeros = numeros.map((numero) => (
    <div
      className="number"
      key={numero}
      onClick={() => setOperacion((prev) => prev + numero)}
    >
      {numero}
    </div>
  ));

  const simbolos = ["/", "*", "+", "-"];
  const listaSimbolos = simbolos.map((simbolo) => (
    <div
      className="simbolo"
      key={simbolo}
      onClick={() => setOperacion((prev) => prev + simbolo)}
    >
      {simbolo}
    </div>
  ));

  function calcularResultado() {
    try {
      // Utilizamos la función eval para calcular la operación
      const resultado = eval(operacion);
      // Actualizamos el estado con el resultado
      setOperacion(resultado.toString());
    } catch (error) {
      setOperacion("Error");
    }
  }

  return (
    <div className="container">
      <div className="calculator">
        <div className="numbers">{listaNumeros}</div>
        <div className="simbolos">
          {listaSimbolos}
          <div className="simbolo" onClick={calcularResultado}>
            =
          </div>
        </div>
      </div>
      <div className="resultado">
        {/* Mostramos la operación actual y el resultado */}
        {operacion}
      </div>
    </div>
  );
}

export default Calculator;
