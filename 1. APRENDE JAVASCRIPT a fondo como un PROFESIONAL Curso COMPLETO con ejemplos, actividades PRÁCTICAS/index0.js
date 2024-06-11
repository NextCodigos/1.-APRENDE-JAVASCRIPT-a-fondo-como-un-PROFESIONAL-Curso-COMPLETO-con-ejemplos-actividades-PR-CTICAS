let nota;
subirNota();
console.log(nota + 1); // NaN

function subirNota() {
  let nota = 10;
  nota = 9;
  console.log(nota); // 9
  console.log(typeof nota); // number
}


// Explicación:

//     Dentro de subirNota:
//         La variable nota se declara y se inicializa a 10.
//         Luego, nota se reasigna a 9.
//         Se imprime el valor de nota, que es 9.
//         Se imprime el tipo de nota, que es number.

//     Fuera de subirNota:
//         Se intenta imprimir nota + 1.
//         La variable nota declarada fuera de subirNota nunca se inicializa, por lo que su valor es undefined.
//         undefined + 1 resulta en NaN (Not a Number).

// Por eso el resultado final fuera de la función es NaN.
