/*Dificultad:  🟢🟡
7- Haz un script que escriba una pirámide inversa de los números del 1 al número que indique el usuario (no mayor de 50)  de la siguiente forma : (suponiendo que indica 30).

            303030303030303030303030303030303030303030303030303030303030
            2929292929292929292929292929292929292929292929292929292929
            28282828282828282828282828282828282828282828282828282828
            …..
            333
            22
            1

*/
let numero=parseInt(prompt("Ingrese un numero entre 1 y 50"));

if (!numero || numero<0 || numero > 50) {
    alert("Ingrese un numero correcto");   
}else{
    do {
        let i=1;
        do {
            console.log(numero);
            document.write(numero);
            i++;
        } while (i<=numero);
        numero--;
        document.write("<br>");
    } while (numero!=0);
}