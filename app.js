// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

// Función para añadir un amigo
function agregarAmigo() {
    const input = document.getElementById('amigo');
    const nombre = input.value.trim(); // Eliminamos espacios en blanco

    if (nombre === '') {
        alert('Por favor, inserte un nombre.');
        return; // Salimos de la función si el nombre está vacío
    }

    if (amigos.includes(nombre)) {
        alert('El nombre ya está en la lista.');
        return; // Salimos de la función si el nombre ya está en la lista
    }

    amigos.push(nombre);
    console.log(`Amigo añadido: ${nombre}`);
    actualizarListaAmigos();

    input.value = ''; // Limpiar el campo de texto
}

// Función para actualizar la lista visual de amigos
function actualizarListaAmigos() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = ''; // Limpiamos la lista actual

    amigos.forEach((amigo, index) => {
        const item = document.createElement('li');
        item.textContent = `${index + 1}. ${amigo}`;
        lista.appendChild(item);
    });
}


// Función para sortear un amigo secreto
function sortearAmigo() {
    if (amigos.length === 0) {
        alert('No hay amigos en la lista para sortear.');
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSecreto = amigos[indiceAleatorio];

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>El amigo secreto sorteado es: <strong>${amigoSecreto}</strong></li>`;
    console.log(`El amigo secreto sorteado es: ${amigoSecreto}`);
}

