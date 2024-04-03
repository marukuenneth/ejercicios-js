/*Dificultad:  🟢🟡 
9.- Escribe un programa que pida una frase y escriba las vocales que aparecen
Nota: Tener en cuenta la función length y substring o charAt (developer mozilla)
Ejemplo:
            input: Hola mundo
            Output: oauo

INVESTIGACION PROPIA:
El método charAt(i) de String devuelve en un nuevo String el carácter en la posicion i de una cadena.
El substring() método devuelve un subconjunto de un objeto String.
*/
let frase = prompt("ingrese una frase:");
let vocales= "";
for(let i=0; i<=frase.length; i++){
    if(frase.charAt(i) === "a"||frase.charAt(i) === "e"||frase.charAt(i) === "i"||frase.charAt(i) === "o"||frase.charAt(i) === "u"){
        vocales= vocales + frase.charAt(i);
    }
}
document.write(vocales);
console.log(vocales);