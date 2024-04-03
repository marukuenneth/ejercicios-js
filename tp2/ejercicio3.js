/*Dificultad:  🟢🟡
3- Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”. Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión -.
Nota: usar confirm() https://www.w3schools.com/jsref/met_win_confirm.asp
*/
let concatenadas="";
do {
  let cadena="";
  cadena=prompt("Ingresa un mensaje");
  if (concatenadas==="") {
    concatenadas=cadena;
  }else{
  concatenadas=concatenadas+"-"+cadena;
  }
}while((confirm("Presiona cancelar para dejar de escribir cadenas")==true) );
document.write(concatenadas);
