/*Dificultad:  🟢🟡
10.- Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o 7 (sólo hay que comprobar si lo es por uno de los cuatro)
Ejemplo: 
            input: 20
            Output: El 20 es divisible por 2.
*/
let a= parseInt(prompt("ingrese un numero: "));

if(a%2==0){
    console.log(`El ${a} es divisible por 2. `);
    document.write(`El ${a} es divisible por 2. `);
}else if(a%3==0){
    console.log(`El ${a} es divisible por 3. `);
    document.write(`El ${a} es divisible por . `);

}else if(a%5==0){
    console.log(`El ${a} es divisible por 5. `);
    document.write(`El ${a} es divisible por 5. `);
}else if(a%7==0){
    console.log(`El ${a} es divisible por 7. `);
    document.write(`El ${a} es divisible por 7. `);
}else{
        console.log(`El ${a} no es divisible por 2, 3, 5 o 7. `);
        document.write(`El ${a} no es divisible por 2, 3, 5 o 7.`);
    
}