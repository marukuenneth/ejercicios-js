/*
Dificultad:  🟢
17- Realiza un script que muestre la posición de la primera vocal de un texto introducido por teclado.
Ejemplo:
            Input: Hola mundo
            Output: la vocal ‘o’ está en la posición 1
*/

let texto=prompt("Ingrese un texto");
let bandera=0;
let letra;
let primeraVocal;

texto=texto.toLowerCase();
for (let i = 0; i < texto.length; i++) {
    letra=texto.charAt(i);
    if (bandera==0) {
        if (letra=="a"|| letra=="e"||letra=="i"||letra=="o"||letra=="u") {
            bandera=1;
            document.write(texto+"<br>");
            document.write(`La vocal ${letra} está en la posicion ${i}`);
        }
    } else {
        break;
    }
    
}