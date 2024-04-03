/*Dificultad:  🟢🟡
11.- Añadir al ejercicio anterior que nos diga por cuál de los cuatro es divisible (hay que decir todos por los que es divisible)
Ejemplo: 
            input: 20
            input: 210
            Output: El 20 es divisible por 2 y por 5.
            Output: El 210 es divisible por 2, por 3, por 5 y por 7.
*/
let a= parseInt(prompt("ingrese un numero: "));

if(a%2==0 && a%3==0 && a%5==0 && a%7==0){
    console.log(`El ${a} es divisible por 2, por 3, por 5 y por 7.`);
    document.write(`El ${a} es divisible por 2, por 3, por 5 y por 7. `);
}else if(a%2==0 && a%3==0 && a%5==0){
    console.log(`El ${a} es divisible por 2, por 3 y por 5.`);
    document.write(`El ${a} es divisible por 2, por 3 y por 5.`);

}else if(a%7==0 && a%3==0 && a%5==0){
        console.log(`El ${a} es divisible por 2, por 3 y por 5.`);
        document.write(`El ${a} es divisible por 2, por 3 y por 5.`);
}else if(a%2==0 && a%7==0 && a%5==0){
    console.log(`El ${a} es divisible por 2, por 5 y por 7.`);
    document.write(`El ${a} es divisible por 2, por 5 y por 7.`);

}else if(a%2==0 && a%3==0 && a%7==0){
    console.log(`El ${a} es divisible por 2, por 3 y por 7.`);
    document.write(`El ${a} es divisible por 2, por 3 y por 7.`);

}else if(a%2==0 && a%3==0){
    console.log(`El ${a} es divisible por 2 y por 3. `);
    document.write(`El ${a} es divisible por 2 y por 3. `);
}else if(a%2==0 && a%5==0){
    console.log(`El ${a} es divisible por 2 y por 5. `);
    document.write(`El ${a} es divisible por 2 y por 5. `);
}else if(a%2==0 && a%7==0){
    console.log(`El ${a} es divisible por 2 y por 7. `);
    document.write(`El ${a} es divisible por 2 y por 7. `);
}else if(a%5==0 && a%3==0){
    console.log(`El ${a} es divisible por 5 y por 3. `);
    document.write(`El ${a} es divisible por 5 y por 3. `);
}else if(a%7==0 && a%3==0){
    console.log(`El ${a} es divisible por 7 y por 3. `);
    document.write(`El ${a} es divisible por 7 y por 3. `);
}else if(a%5==0 && a%7==0){
    console.log(`El ${a} es divisible por 5 y por 7. `);
    document.write(`El ${a} es divisible por 5 y por 7. `);
}else if(a%2==0){
    console.log(`El ${a} es divisible por 2. `);
    document.write(`El ${a} es divisible por 2. `);
}else if(a%3==0){
    console.log(`El ${a} es divisible por 3. `);
    document.write(`El ${a} es divisible por 3. `);
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