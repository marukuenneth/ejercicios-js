/*Dificultad:  🟢
Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.
Ejemplo: 
            input: 15 , 3
            Output: El 15 es el número más grande
*/

let a= parseInt(prompt("ingrese un numero: "));
let b= parseInt(prompt("ingrese otro numero: "));
if(a>b){
    console.log(`este numero es mayor que el otro: ${a}`);
    document.write(`este numero es mayor que el otro: ${a}`);
}else{
    console.log(`este numero es mayor que el otro: ${b}`);
    document.write(`este numero es mayor que el otro: ${b}`);
}