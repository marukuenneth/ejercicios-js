/*
Dificultad:  🟢🟡
16- Realiza un script que pida una cadena de texto y la devuelva al revés. Es decir, si tecleo “hola que tal” deberá mostrar “lat euq aloh”.
*/
let texto = prompt("Ingrese un texto");
let letra;
let alReves="";
for (let i = 0; i < texto.length; i++) {
    letra= texto.charAt(i);
    alReves=letra+alReves;
}
document.write(alReves);