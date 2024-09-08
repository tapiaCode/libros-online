function openMenu() {
  document.body.classList += " menu--open";
}

function closeMenu() {
  document.body.classList.remove("menu--open");
}

function abrirModal(pdfUrl) {
  console.log(pdfUrl);
  var modal = document.getElementById("modal");
  var pdfViewer = document.getElementById("pdf-viewer");

  pdfViewer.src = pdfUrl;
  modal.style.display = "block";

  console.log("Abriendo modal con PDF:", pdfUrl);
}

function cerrarModal() {
  var modal = document.getElementById("modal");
  var pdfViewer = document.getElementById("pdf-viewer");

  modal.style.display = "none";
  pdfViewer.src = "";

  console.log("Cerrando modal");
}

// Cerrar el modal si se hace clic fuera de él
window.onclick = function (event) {
  var modal = document.getElementById("modal");
  if (event.target == modal) {
    cerrarModal();
  }
};
