let numero1 = 0; 
let numero2 = 0; 
const NUM_CORRECTO1 = 3;
const NUM_CORRECTO2 = 4;


while (numero1 != NUM_CORRECTO1 || numero2 != NUM_CORRECTO2){
    numero1 = prompt("ingrese el primer numero");
    numero2 = prompt("ingrese el segundo numero");
}

document.querySelector("#resultado").innerHTML = `Ganaste`;