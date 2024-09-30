saludar();
let nombre="Beny y Oleg";
console.log(nombre)//Beny y Oleg
const OJOS=1;
let gusanos="Brocheta"

// Variables de ambito local entre {}
function saludar(gusanos) {
    let nombre="BENI";
    const OJOS=2;
    var edad=18;
    console.log(nombre)//BENI
    
}
console.log(nombre)//Beny y Oleg
console.log(gusanos)//Brocheta
saludar(gusanos);//BENI  
// Salida por consola
// jab
// javier