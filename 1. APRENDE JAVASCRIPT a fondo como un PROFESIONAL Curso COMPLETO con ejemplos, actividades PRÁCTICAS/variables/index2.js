console.log(ojos);//undefined

let edad=18;
edad=19;
var vivo=true;
vivo=false;
const NOMBRE="Jab";

// Todas variables entre {} solo tienen valor dentro de ellas
if (true){
    var ojos=3;
}
// Si pongo let o const no lee fuera
if (true){
    var ojos=2;
}

if (true) {
    let edad=18;
    console.log(ojos);//2
}