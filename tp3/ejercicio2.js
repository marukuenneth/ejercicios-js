/*
Dificultad:  🟢🟡
2-  Crear un script que solicite al usuario mediante un prompt el nombre de ciudades y almacenarlas en un arreglo, cuando el usuario selecciona cancelar se debe mostrar el arreglo generado, luego realizar las siguientes acciones:

-Mostrar la longitud del arreglo.
-Mostrar en el documento web los ítems de las posiciones primera, tercera y última.
-Añade en última posición la ciudad de París.
-Escribe por pantalla el elemento que ocupa la segunda posición.
-Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'.

Ejemplo:
Input:
[‘Nueva York, Estados Unidos’, ‘Barcelona, España’, ‘Tokio, Japón’, ‘Londres, Reino Unido’, ‘Roma, Italia’, ‘Pekín, China’, ‘Río de Janeiro, Brasil’, ‘Ámsterdam, Países Bajos’, ‘Sídney, Australia’, ‘El Cairo, Egipto’]

Output:
[imagen]
*/
let ciudades=[];
do {
  let ciudad="";
  ciudad=prompt("Ingresa nombres de ciudades");
  ciudades.push(ciudad)
}while((confirm("Presiona cancelar para dejar de escribir ciudades")==true) );

document.write(`La longitud del arreglo de ciudades es ${ciudades.length}<br>`);

document.write(`La ciudad en la posicion 1 del arreglo es: ${ciudades[0]}<br>`);
document.write(`La ciudad en la posicion 3 del arreglo es: ${ciudades[2]}<br>`);
document.write(`La ciudad en la ultima posicion del arreglo es: ${ciudades[ciudades.length-1]}<br>`);

ciudades[ciudades.length-1]="paris";

document.write(`La ciudad en la posicion 2 del arreglo es: ${ciudades[1]}<br>`);

ciudades.splice(1, 0, "Barcelona");

// muestro todo el arreglo
document.write(`<h1>Arreglo de ciudades</h1>`);
document.write(`<ul>`);
for (let i = 0; i < ciudades.length; i++) {
  document.write(`<li>Elemento ${i+1}: ${ciudades[i]} </li>`);
}
document.write(`</ul>`);