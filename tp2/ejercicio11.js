/*Ejercicios con Math
------------------------------------
Dificultad:  🟢🟡
11- Realiza un script que pida por teclado 3 edades y 3 nombres e indique el nombre del mayor. *
Nota: ver funcion Math() https://www.w3schools.com/js/js_math.asp
*/

let primerNombre = prompt("Ingrese el primer nombre:");
let primerEdad = parseInt(prompt("Ingrese la edad:"));

let segundoNombre = prompt("Ingrese el segundo nombre:");
let segundoEdad = parseInt(prompt("Ingrese la edad:"));

let TercerNombre = prompt("Ingrese el tercer nombre:");
let TercerEdad = parseInt(prompt("Ingrese la edad:"));

//Función max() devuelve el mayor de los argumentos pasados.
let mayor = Math.max(primerEdad, segundoEdad, TercerEdad);

if (mayor == primerEdad) {
    document.write("El mayor es: " + primerNombre);
}else if (mayor == segundoEdad) {
    document.write("El mayor es: " + segundoNombre);
}else {
    document.write("El mayor es: " + TercerNombre);
}