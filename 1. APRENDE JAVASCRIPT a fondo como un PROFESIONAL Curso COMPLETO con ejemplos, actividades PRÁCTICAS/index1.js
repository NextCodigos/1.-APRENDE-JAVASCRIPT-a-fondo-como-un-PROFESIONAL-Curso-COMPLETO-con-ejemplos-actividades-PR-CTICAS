let nota = 0;
subirNota();
console.log(extra); // 7
console.log(PUNTOS); // ReferenceError: PUNTOS is not defined

function subirNota() {
  nota = 2;
  extra = 7;
  console.log(nota); // 2
  const PUNTOS = 10;
}

// Explicación:

//     Dentro de subirNota:
//         La variable nota se reasigna a 2.
//         Se define la variable extra con el valor 7 sin usar let, const o var, lo que la convierte en una variable global.
//         Se imprime el valor de nota, que es 2.
//         Se define la constante PUNTOS con el valor 10.

//     Fuera de subirNota:
//         Se imprime el valor de extra, que es 7 ya que extra se ha definido como una variable global dentro de la función subirNota.
//         Se intenta imprimir PUNTOS, pero esto resulta en un ReferenceError porque PUNTOS es una constante con alcance de bloque, solo accesible dentro de la función subirNota.

// Por lo tanto, el primer console.log imprime 7, y el segundo console.log arroja un ReferenceError.