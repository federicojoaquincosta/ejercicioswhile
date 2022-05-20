const ACERTASTE = `<img src="https://cdn.memegenerator.es/imagenes/memes/full/31/52/31529218.jpg" alt="acertaste">`

const NUM_CORRECTO = 42; 
let numUsuario = 0;

while (numUsuario != NUM_CORRECTO) {
    numUsuario = prompt("Adivine el número")

}

document.querySelector("#resultado").innerHTML = ` 
${ACERTASTE} 
`;