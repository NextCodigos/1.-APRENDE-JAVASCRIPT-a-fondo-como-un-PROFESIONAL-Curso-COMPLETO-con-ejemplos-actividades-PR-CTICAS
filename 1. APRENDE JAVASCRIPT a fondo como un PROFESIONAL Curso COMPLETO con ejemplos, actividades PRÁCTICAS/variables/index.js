console.log(vivo);//undefined
console.log(edad);//Uncaught ReferenceError: can't access lexical declaration 'edad' before initialization
let edad=18;
edad=19;
var vivo=true;
vivo=false;
