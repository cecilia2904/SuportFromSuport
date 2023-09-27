const toggleButton = document.querySelector(".toggle-button");
const sidebar = document.getElementById("sidebar");

toggleButton.addEventListener("click", () => {
    sidebar.classList.toggle("show");
});

//tutoriais

function abrirPDF() {
    window.open("tutoriais/chamados internos.pdf", "_blank");
}