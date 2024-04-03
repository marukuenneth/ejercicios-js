/*Dificultad:  🟢🟡
8- Crea script para generar pirámide siguiente con los números del 1 al número que indique el usuario (no mayor de 50) 
            1
            12
            123
            1234
            12345
            123456
            ……

*/
let numero=parseInt(prompt("Ingrese un numero entre 1 y 50"));
if (!numero || numero<0 || numero>50) {
    alert("Ingrese un numero correcto");
}else{
    for (let i = 1; i <=numero; i++) {
        for (let x = 1; x <= i; x++) {
                console.log(x);
                document.write(x);
        }
        document.write("<br>");
    }
}