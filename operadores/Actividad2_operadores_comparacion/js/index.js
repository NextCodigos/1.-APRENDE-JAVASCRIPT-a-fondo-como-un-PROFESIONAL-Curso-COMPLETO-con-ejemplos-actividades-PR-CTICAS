const NOMBRE_CORRECTO = "jab";
const ALIAS_CORRECTO = "soyjab";
const PIN_CORRECTO = 12;
const PASSWORD_CORRECTO = "1234";

// Estos son los datos del usuario (modifícalos para comprobar que todo funciona correctamente)
const NOMBRE = "soyjab"; // Cambia este valor
const PIN = 0; // Cambia este valor
const PASSWORD = "1234"; // Cambia este valor

// Evaluar las condiciones
const resultado =
  (NOMBRE === NOMBRE && PIN === PIN && PASSWORD === PASSWORD) ||
  ((NOMBRE === NOMBRE_CORRECTO || NOMBRE === ALIAS_CORRECTO) &&
    (PIN === PIN_CORRECTO || PASSWORD === PASSWORD_CORRECTO))
    ? "Bien"
    : "Mal";

// Función para mostrar el resultado
function dibujar(valor) {
  const resultadoDiv = document.querySelector(".resultado");
  resultadoDiv.innerHTML = valor;
  resultadoDiv.style.color = valor === "Bien" ? "green" : "red"; // Cambiar color según el resultado
}

// Llamar a la función para mostrar el resultado
dibujar(resultado);
