/*Dificultad:  🟢🟡
4- Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un número deberá indicarse con un «alert» y seguir pidiendo números. Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.
*/
let suma=0;
do {
  let numero=parseInt(prompt("Ingrese un número"))
  if (!numero) {
    alert("Ingrese un numero correcto")
  }else{
    suma=suma+numero;
  }
} while (confirm("Para dejar de ingresar numeros presiona 'Cancelar'")==true);
document.write(suma);