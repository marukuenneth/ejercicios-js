/*Dificultad:  🟢
1- Escribir un programa que solicite la edad y si es mayor de 18 años mostrar un mensaje que ya puede conducir, si la edad ingresada no es un número válido indicarlo en un mensaje.
*/
let edad = parseInt(prompt("Ingrese su edad"));
if (edad>= 18) {
  console.log("Usted es mayor de edad, ya puede conducir.");
  document.write("Usted es mayor de edad, ya puede conducir.");
}else if (edad<18 && edad>1) {
  console.log("Usted no tiene la edad adecuada para poder conducir.");
  document.write("Usted no tiene la edad adecuada para poder conducir.");
}
if (edad<=0||edad>120) {
  console.log("ingrese una edad correcta.");
  document.write("ingrese una edad correcta.");
}