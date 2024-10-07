//EJERCICIO 4

//Punto 1

function esPar(numero) {
        if (numero % 2 === 0) {
            console.log("El número", numero, "es par:", true);
        } else {
            console.log("El número", numero, "es par:", false);
        }
    }   
    esPar(8);
    esPar(7);

//Punto 2
let F;

function convertirCelsiusAFahrenheit (C){
        F = C * 1.8 + 32;
        console.log(C,"°C son equivalentes a",F,"°F") 
}

convertirCelsiusAFahrenheit (30);