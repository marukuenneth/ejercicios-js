/*Dificultad:  🟢
8.- Escribe un programa que pida un número y diga si es divisible por 2
Ejemplo: 
            input: 10
            input: 15
            Output: El 10 es divisible por 2.
            Output: El 15 no es divisible por 2.
*/
let a= parseInt(prompt("ingrese un numero: "));
let b= parseInt(prompt("ingrese otro numero: "));

if(a%2 == 0){
    console.log(`El ${a} es divisible por 2.`);
    document.write(`El ${a} es divisible por 2.`);
}else{
    console.log(`El ${a} no es divisible por 2.`);
    document.write(`El ${a} no es divisible por 2.`);
}

if(b%2 == 0){
    console.log(`El ${b} es divisible por 2.`);
    document.write(`El ${b} es divisible por 2.`);
}else{
    console.log(`El ${b} no es divisible por 2.`);
    document.write(`El ${b} no es divisible por 2.`);
}