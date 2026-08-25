//console.log('Javascript está listo para practicar');

/*function calcularTotal(precio, cantidad) {
    const total = precio * cantidad;
    return total;
}
const resultado = calcularTotal(50000, 3);
console.log(resultado);*/

/*function Sumar(a, b) {
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
Carommi :)


const aplicarIva = (precio) => {
    return precio * 1.19;
};

console.log(aplicarIva(120000));


const productos = [
    { id: 1, nombre: 'Mouse', precio: 50000, stock: 5 },
    { id: 2, nombre: 'Teclado', precio: 90000, stock: 0 },
    { id: 3, nombre: 'Monitor', precio: 650000, stock: 3 },
    { id: 4, nombre: 'MousePad', precio: 34000, stock: 15 },
    { id: 5, nombre: 'Protector Teclado', precio: 20000, stock: 10 },
    { id: 6, nombre: 'Mouse Ergonomico', precio: 75000, stock: 20 },
    { id: 7, nombre: 'Silla', precio: 50000, stock: 9 },
    { id: 8, nombre: 'Silla Ergonomica', precio: 102000, stock: 5 },
    { id: 9, nombre: 'Portatil', precio: 3100000, stock: 4 },
    { id: 10, nombre: 'Cable Ethernet', precio: 65000, stock: 10 }
];

const productoCopia = {
    ...productos[4],
    stock: 0,
    precio: 18000
};

const estado = productoCopia.stock > 0 ? 'Disponible' : 'Agotado';
console.log(estado);

console.log(`El producto ${productoCopia.nombre} cuesta $${productoCopia.precio}`);

/*
const encontrado = productos.find(
    producto => producto.id === 5
);
console.log(encontrado);

const nombre = productos.map(producto => {
    console.log(producto.nombre);
    return producto.nombre;
});
*/

//RETOS
//ARROWS FUNCTIONS
/*const nombreCompleto = (nombre) => ('¡Hola! Usted se llama ' + nombre);
console.log(nombreCompleto('Carito Rodríguez'));
*/
//ARREGLOS Y OBJETOS
const productos = [
    { id: 1, nombre: 'Mouse', precio: 70000, categoria: 'Perifericos', stock: 5 },
    { id: 2, nombre: 'Teclado', precio: 90000, categoria: 'Perifericos', stock: 0 },
    { id: 3, nombre: 'Monitor', precio: 650000, categoria: 'Pantallas', stock: 3 },
    { id: 4, nombre: 'Audífonos', precio: 120000, categoria: 'Audio', stock: 8 },
    { id: 5, nombre: 'Webcam', precio: 480000, categoria: 'Cámaras', stock: 4 },
    { id: 6, nombre: 'Micrófono', precio: 250000, categoria: 'Audio', stock: 2 },
    { id: 7, nombre: 'Laptop', precio: 3500000, categoria: 'Computadores', stock: 6 },
    { id: 8, nombre: 'Alfombrilla', precio: 60000, categoria: 'Perifericos', stock: 10 },
    { id: 9, nombre: 'Parlantes', precio: 250000, categoria: 'Audio', stock: 0 },
    { id: 10, nombre: 'Tablet', precio: 4000000, categoria: 'Dispositivos', stock: 7 }
];

const valorInventario = productos.reduce(
    (total, producto) => total + producto.precio * producto.stock,
    0
);
console.log(valorInventario);