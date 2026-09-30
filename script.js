// Paletas de fondo + colores de acento, para que "Cambiar color" varíe todo el tema
const paletas = [
  { fondo: "#fdf3df", acento: "#0e8f7d", acento2: "#e67e5a" },
  { fondo: "#e6f5f2", acento: "#1f7a5c", acento2: "#f2a541" },
  { fondo: "#fde2e2", acento: "#c1446e", acento2: "#4a6fa5" },
  { fondo: "#e2e8fd", acento: "#3b5bab", acento2: "#e0576b" }
];

function cambiarColor() {
  const random = Math.floor(Math.random() * paletas.length);
  const paleta = paletas[random];
  const raiz = document.documentElement.style;
  raiz.setProperty("--color-fondo", paleta.fondo);
  raiz.setProperty("--color-acento", paleta.acento);
  raiz.setProperty("--color-acento-2", paleta.acento2);
}

// Datos curiosos sobre hermanos siameses, mostrados al azar
const datosCuriosos = [
  "Chang y Eng Bunker, los hermanos que dieron nombre al término \"siameses\", llegaron a tener 21 hijos entre los dos.",
  "Existen casos de gemelos siameses que comparten un solo corazón, pero también casos donde solo comparten piel y músculo, sin órganos internos.",
  "El primer registro histórico de hermanos siameses documentado data del año 945, en Armenia.",
  "Abigail y Brittany Hensel, gemelas dicéfalas, aprendieron a manejar un auto: una controla el volante y los pedales, la otra las luces y el intermitente.",
  "Algunos hermanos siameses pueden sentir lo que su hermano toca si comparten terminaciones nerviosas en la zona de unión.",
  "La separación de hermanos siameses no siempre es la mejor opción: algunos, al llegar a adultos, deciden no separarse por los riesgos o porque no lo desean.",
  "Existen 15 tipos reconocidos de unión en hermanos siameses, aunque solo cinco explican más del 70% de los casos."
];

function mostrarDato() {
  const caja = document.getElementById("caja-dato");
  const random = Math.floor(Math.random() * datosCuriosos.length);
  caja.textContent = "💡 " + datosCuriosos[random];
  caja.classList.remove("oculto");
}

// Lógica de pestañas
document.addEventListener("DOMContentLoaded", () => {
  const botones = document.querySelectorAll(".pestana");
  const paneles = document.querySelectorAll(".panel");

  botones.forEach((boton) => {
    boton.addEventListener("click", () => {
      const destino = boton.getAttribute("data-tab");

      botones.forEach((b) => {
        b.classList.remove("activa");
        b.setAttribute("aria-selected", "false");
      });
      boton.classList.add("activa");
      boton.setAttribute("aria-selected", "true");

      paneles.forEach((panel) => {
        panel.classList.toggle("activa", panel.id === destino);
      });
    });
  });
});
