const form = document.querySelector("#agregar_tarea");
const input = document.querySelector("#tareaInput");
const divIncompletos = document.querySelector("#incomplete");
const divCompletado = document.querySelector("#complete");

form.addEventListener("submit", function(e) {
    e.preventDefault(); //no recarga pg

    const texto = input.value.trim();
    if (texto === "") return;

    const tareaDiv = document.createElement("div");
    tareaDiv.textContent = texto;

    let completado = false;

    tareaDiv.addEventListener("click", function() {
        completado = !completado;

        if (completado) {
            divCompletado.appendChild(tareaDiv);
        } else {
            divIncompletos.appendChild(tareaDiv);
        }
    });

    divIncompletos.appendChild(tareaDiv);
    input.value = "";
});