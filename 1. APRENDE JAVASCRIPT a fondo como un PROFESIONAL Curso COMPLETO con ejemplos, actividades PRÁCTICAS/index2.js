console.log(miNombre); // undefined
let color = "Rojo";
if (true) {
  // Tiene validez de forma global
  var miNombre = "Jab";
  // Tiene validez solo dentro del if
  let color = "Azul";
}
console.log(miNombre); // Jab
console.log(color); // Rojo

// Explicación:

//     Primer console.log(miNombre):
//         La variable miNombre se declara con var dentro del bloque if, pero debido al "hoisting" (elevación), la declaración se mueve al comienzo de la función o del contexto global, aunque su inicialización no se realiza hasta que se ejecuta el if.
//         Por eso, en este punto, miNombre está declarado pero no inicializado, resultando en undefined.

//     Dentro del if:
//         Se declara miNombre con var, y se inicializa a "Jab". Debido a que var no tiene alcance de bloque, miNombre es accesible fuera del if.
//         Se declara una nueva variable color con let dentro del bloque if, que es diferente de la variable color declarada fuera del if.

//     Segundo console.log(miNombre):
//         La variable miNombre ya está inicializada a "Jab" y se encuentra en el contexto global.

//     Tercer console.log(color):
//         La variable color que se declara dentro del bloque if tiene un alcance de bloque y no afecta a la variable color declarada fuera del if.
//         Por lo tanto, se imprime el valor de la variable color declarada fuera del if, que es "Rojo".