/*Dificultad:  🟢🟡
15- Realiza un script que cuente el número de vocales que tiene un texto.

*/
let texto = prompt("Ingrese un texto");
let contador=0;

document.write(texto + "<br>");
texto=texto.toLowerCase();

for (let i = 0; i < texto.length; i++) {
    let letra= texto.charAt(i);
    if (letra =="a"||letra=="e"||letra=="i"||letra=="o"||letra=="u") {
        contador++;
    }
}
document.write("La cantidad de vocales que tiene el texto ingresado es:"+contador);