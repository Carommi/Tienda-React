//console.log('Javascript está listo para practicar');

/*function calcularTotal(precio, cantidad) {
    const total = precio * cantidad;
    return total;
}
const resultado = calcularTotal(50000, 3);
console.log(resultado);*/

function Sumar(a, b) {
    const totalSuma = a + b
    return totalSuma
}

function Restar(a, b) {
    const totalResta = a - b
    return totalResta
}

function Multiplicación(a, b) {
    const totalMulti = a * b
    return totalMulti
}

function Dividir(a, b) {
    const totalDivision = a / b
    return totalDivision
}

function calcularPromedio(nota1, nota2, nota3) {
    const totalPromedio = nota1 + nota2 + nota3 / 3
    return totalPromedio
}

console.log(Sumar(8, 98));
console.log(Restar(67, 21));
console.log(Multiplicación(34, 6));
console.log(Dividir(2472, 4));
console.log(calcularPromedio(70, 90, 60));

/* La diferencia entre Return y Console.log es que 
1. Return retorna los valores, operaciones matematicas, textos o cualquier cosa, según el para qué está
programada la función mas NO muestra ningún valor en consola.
2. El Console.log es mucho más simple, el sirve simplemente para mostrar en consola, es decir, todo lo
que pongamos en los paréntesis de Console.log() se va a mostrar en consola. 
Carommi :)*/