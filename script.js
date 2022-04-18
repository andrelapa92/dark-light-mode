const fundo = document.getElementById("fundo");
const texto = document.getElementById("text-mode");

function changeMode() {
    fundo.classList.toggle("fundo-dark");
    texto.classList.toggle("texto-dark");
    if (fundo.classList.contains("fundo-dark")) {
        texto.textContent = "Dark Mode";
    } else { texto.textContent = "Light Mode" }
}