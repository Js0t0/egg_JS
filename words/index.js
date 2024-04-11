const frase = prompt('Ingrese una palabra o frase');

const cantidad = frase.length;

const mayusc = frase.toUpperCase();
const minusc = frase.toLocaleLowerCase();

console.log('Cantidad de caracteres: ' + cantidad);
console.log('Muestra los caracteres todos es mayuscula: ' + mayusc);
console.log('Muestra los caracteres todos es minuscula: ' + minusc);
