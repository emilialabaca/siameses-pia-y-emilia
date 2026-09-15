// Paletas: fondo de página + acento principal + acento secundario
const paletas = [
  { papel: "#faf6ee", acento: "#0f6b5c", acento2: "#c1633b" },
  { papel: "#f3f2e8", acento: "#3b5b6e", acento2: "#c97b3d" },
  { papel: "#f6efe9", acento: "#8a4a3d", acento2: "#3f7a5c" },
  { papel: "#eef2ec", acento: "#4a5f3a", acento2: "#a3572f" }
];

function cambiarColor() {
  const random = Math.floor(Math.random() * paletas.length);
  const paleta = paletas[random];
  const raiz = document.documentElement.style;
  raiz.setProperty("--papel", paleta.papel);
  raiz.setProperty("--acento", paleta.acento);
  raiz.setProperty("--acento-2", paleta.acento2);
}

// Navegación entre secciones
document.addEventListener("DOMContentLoaded", () => {
  const entradas = document.querySelectorAll(".entrada");
  const paneles = document.querySelectorAll(".panel");

  entradas.forEach((entrada) => {
    entrada.addEventListener("click", () => {
      const destino = entrada.getAttribute("data-tab");

      entradas.forEach((e) => e.classList.remove("activa"));
      entrada.classList.add("activa");

      paneles.forEach((panel) => {
        panel.classList.toggle("activa", panel.id === destino);
      });
    });
  });
});
