saludar();
let nombre="Javier";
console.log(nombre)//Javier
const OJOS=1;

// Variables de ambito local entre {}
function saludar() {
    let nombre="Jab";
    const OJOS=2;
    var edad=18;
    console.log(nombre)//Jab
}

// Salida por consola
// jab
// javier