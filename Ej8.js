//EJERCICIO 8

//Punto 1

const lista = document.getElementById('miLista');
const elementos = lista.getElementsByTagName('li');


for (let i = 0; i < elementos.length; i++) {
    elementos[i].addEventListener('click', function() {

        console.log(this.textContent);
    });
}

//Punto 2

  const deshabilitar = () => {
      const input = document.getElementById("input"); 
      input.disabled = true; 
      console.log("input deshabilitado");
  }

  const habilitar = () => {
      const input = document.getElementById("input"); 
      input.disabled = false; 
      console.log("input habilitado");
  }

  const button = document.getElementById("Deshabilitar");
  button.addEventListener("click", (event) => {
     event.preventDefault(); 
     deshabilitar();
  });

  const buttonn = document.getElementById("Habilitar");
  buttonn.addEventListener("click", (event) => {
     event.preventDefault(); 
     habilitar(); 
  });

