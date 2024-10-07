//EJERCICIO 7

//Punto 1
const handleStyleButton = () => {
    const parrafos = document.querySelectorAll(".p"); 
    parrafos.forEach(p => {
        p.classList.add("pblue"); 
    });
}

const button = document.getElementById("button");
button.addEventListener("click", () => {
    handleStyleButton();
});

//Punto 2

function mostrarAlerta() {
    const texto = document.getElementById('texto').value;
    alert('Has ingresado: ' + texto);
}

const buttonn = document.getElementById("buttonn");
buttonn.addEventListener("click", () => {
    mostrarAlerta();
});
