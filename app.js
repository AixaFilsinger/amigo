// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Array para guardar los nombres de amigos
let amigos = [];

// Función para añadir un amigo
function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim(); // elimina espacios en blanco

    if (nombre === "") {
        alert("⚠️ El nombre no puede estar vacío");
        return;
    }

    amigos.push(nombre);
    input.value = ""; // limpiar el campo
    mostrarLista();   // actualizar lista
}

// Función para mostrar la lista de amigos en pantalla
function mostrarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    amigos.forEach((amigo, index) => {
        const li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

// Función para sortear un amigo
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("⚠️ Primero agrega al menos un amigo");
        return;
    }

    const indice = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indice];

    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>🎉 El amigo secreto es: <strong>${amigoSorteado}</strong></li>`;
}
