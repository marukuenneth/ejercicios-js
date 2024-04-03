/*Dificultad:  🟢
7.- Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.
Ejemplo: 
            input: 15 , 3, 9
            Output: El 15 es el número más grande
*/
let a= parseInt(prompt("ingrese un numero: "));
let b= parseInt(prompt("ingrese un segundo numero: "));
let c= parseInt(prompt("ingrese un tercer numero: "));

if(a>b&&a>c){
    console.log(`El ${a} es el número más grande `);
    document.write(`El ${a} es el número más grande `);
}else if(b>a&&b>c){
    console.log(`El ${b} es el número más grande `);
    document.write(`El ${b} es el número más grande `);
}else{
    console.log(`El ${c} es el número más grande `);
    document.write(`El ${c} es el número más grande `);
}