/*Dificultad:  🟢
5.- Escribe un programa de tres líneas que pida un número, pida otro número y escriba el resultado de sumar estos dos números.
Nota: Tener en cuenta la siguiente función: parseInt
https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/parseInt
*/
let a = parseInt(prompt("Ingrese un numero:")); //si yo no le pongo el parseint, lo que yo ingrese sera tomado como string
console.log(a);
let b = parseInt(prompt("Ingrese otro numero:"));// con parseint convierto una cadena (string) en un entero (number)
console.log(b);
console.log(a+b);
document.write( "el resultado es \n" , a+b);
document.write("\n");
document.write( `el resultado es ${a+b}`);