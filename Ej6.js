//EJERCICIO 6 - Arreglos

//Punto 1

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log("Números originales:", array);

for (let i = 0; i < array.length; i++) {
    array[i] = array[i] * 2; 
}

console.log("Números multiplicados por 2:", array);

//Punto 2

let pares = [];

for (let i = 0; i <= 20; i++) {
    if (i % 2 === 0) {
        pares.push(i);
    }
}

console.log("Pares:", pares);
