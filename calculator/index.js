const numero1 = Number(prompt("Ingrese el primer número: "));
const numero2 = Number(prompt("Ingrese el segundo número: "));

const suma = numero1 + numero2;
const promedio = suma / 2;
const triple = promedio * 3;
const resultadoMenosDiez = triple - 10;

const mensajeSuma = "El resultado de la suma es " + suma;
const mensajepromedio = "El resultado del promedio es " + promedio;
const mensajetriple = "El resultado del triple es  " + triple;
const mensajeresultadoMenosDiez =
  "El resultado de triple menos 10 es  " + resultadoMenosDiez;

const mensajeFinal =
  "El primero numero fue : " +
  numero1 +
  "\r\n" +
  "El segundo numero fue : " +
  numero2 +
  "\n" +
  "Suma: " +
  suma +
  "\n" +
  "Promedio: " +
  promedio +
  "\n" +
  "Triple: " +
  triple +
  "\n" +
  "Resultado final - 10 : " +
  resultadoMenosDiez +
  "\n";

alert(mensajeFinal);
