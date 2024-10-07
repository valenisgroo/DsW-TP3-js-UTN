//EJERCICIO 5 - Objetos en JavaScript

//Punto 1

let persona = {
    nombre: "Valentino",
    Edad: "21",
    Ciudad: "Mendoza",
    CambiarCiudad: function(NuevaCiudad) {
        this.Ciudad = NuevaCiudad;
    }
};

persona.CambiarCiudad("Madrid");

console.log(persona);

//Punto 2

let libro = {
    titulo: "El Quijote",
    autor: "Valen",
    año: 1997,
    años: "",
    Calculo: function(AñoActual) {
        this.años = AñoActual - this.año;
    }
};

libro.Calculo(2024);

if (libro.años > 10) {
    console.log(libro.titulo, "es antiguo: true");
} else {
    console.log(libro.titulo, "es antiguo: false");
}