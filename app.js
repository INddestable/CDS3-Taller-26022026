const form = document.querySelector("#agregar_tarea");
const input = document.querySelector("#tareaInput");
const divIncompletos = document.querySelector("#incomplete");
const divCompletado = document.querySelector("#complete");

form.addEventListener("submit", function(e) {
    e.preventDefault(); //no recarga pg

    const texto = input.value.trim();
    if (texto === "") return alert ("Por favor agrega texto antes de agregar una tarea");

    const tareaDiv = document.createElement("div");
    tareaDiv.classList.add("tarea", "pendiente");
    tareaDiv.textContent = texto;

    let completado = false;

    tareaDiv.addEventListener("click", function() {
        completado = !completado;

    if (completado) {
        tareaDiv.classList.add("completada");
        tareaDiv.classList.remove("pendiente");
        divCompletado.appendChild(tareaDiv);
    } else {
        tareaDiv.classList.add("pendiente");
        tareaDiv.classList.remove("completada");
        divIncompletos.appendChild(tareaDiv);
    }
    });

    divIncompletos.appendChild(tareaDiv);
    input.value = "";
});