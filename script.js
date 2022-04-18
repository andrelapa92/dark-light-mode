const fundo = document.getElementById("bg-mode");
const texto = document.getElementById("text-mode");

function changeMode() {
    fundo.classList.toggle("dark-mode");
    texto.classList.toggle("dark-mode");
    if (fundo.classList.contains("dark-mode")) {
        texto.textContent = "Dark Mode";
    } else { texto.textContent = "Light Mode" }
}