const USUARIO_REGISTRADO = "fede"; 
const PASSWORD_REGISTRADA = "123";

let usuarioIngresado = "usuario por defecto";
let passwordIngresada = "password por defecto"

while (usuarioIngresado != USUARIO_REGISTRADO || passwordIngresada != PASSWORD_REGISTRADA) {
    usuarioIngresado = prompt("ingrese su usuario");
    passwordIngresada = prompt("ingrese su contraseña");

}