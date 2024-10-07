//EJERCICIO 2 - Operadores lógicos y condicionales

//Punto 1

let d = 3;
let e = 4;
let f = 5;

if (d>e && d>f){
    console.log("El mayor de los tres numeros es: ", d);
}

if (e>d && e>f){
    console.log("El mayor de los tres numeros es: ", e);
}

if (f>d && f>e){
    console.log("El mayor de los tres numeros es:", f);
}

//Punto 2

let numero = prompt ("Ingrese un número");
if (numero % 2 === 0 ) {
    console.log("El número ingresado es par:",numero);
}else{
    console.log("El número ingresado es impar:",numero);
}

