let nombre="Javier";
const OJOS=1;
console.log(nombre); // Javier
saludar();

// Variables de ambito local entre {}
function saludar() {
    let nombre="Jab";
    var edad=18;
    console.log(nombre)//Jab
    }
console.log(nombre); // javier

// En JavaScript, las variables declaradas con let y const tienen un ámbito de bloque, lo que significa que son visibles solo dentro del bloque de código donde se declaran. En este caso, la variable nombre está declarada fuera de la función saludar(), por lo que su valor no se modifica dentro de la función.

// Por otro lado, la variable edad está declarada con var, que tiene un ámbito de función. Esto significa que su valor se modifica dentro de la función saludar(), pero solo dentro de esa función.

// Cuando ejecutas el código, primero se imprime el valor de nombre fuera de la función saludar(), que es "Javier". Luego se llama a la función saludar(), que imprime el valor de nombre dentro de la función, que es "Jab".

// Finalmente, se imprime el valor de nombre fuera de la función saludar() nuevamente, que ahora es "Jab" porque su valor se modificó dentro de la función saludar().
// Salida por consola
// jab
// javier