//EJERCICIO 3 - Operadores de asignación y bucles

let num = 10;

while (num > 0) {
    console.log(num);
    num = num - 1;
}

//Punto 2

let numero;

do {
    numero = prompt("Ingresa número mayor a 100"); 
}
while(numero <= 100);

console.log("Ingresaste un número mayor a 100:", numero);

