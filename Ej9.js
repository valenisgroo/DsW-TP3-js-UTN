//EJERCICIO 9

const emailInput = document.getElementById('email');
const savedEmailDiv = document.getElementById('savedEmailDiv');
const deleteEmailButton = document.getElementById('deleteEmail');

function loadSavedEmail() {
    const savedEmail = localStorage.getItem('email');
    if (savedEmail) {
        savedEmailDiv.textContent = `Correo guardado: ${savedEmail}`;
        deleteEmailButton.style.display = 'block'; // Mostrar el botón de eliminar si hay correo guardado
    }
}

function saveEmail(event) {
    event.preventDefault();
    const emailValue = emailInput.value;
    if (emailValue) {
        localStorage.setItem('email', emailValue);
        savedEmailDiv.textContent = `Correo guardado: ${emailValue}`;
        deleteEmailButton.style.display = 'block'; // Mostrar el botón de eliminar
    }
}

function deleteEmail() {
    localStorage.removeItem('email');
    savedEmailDiv.textContent = ''; 
    deleteEmailButton.style.display = 'none'; 
}

document.getElementById('emailForm').addEventListener('submit', saveEmail);
deleteEmailButton.addEventListener('click', deleteEmail);

loadSavedEmail();
