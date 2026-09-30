// Datos curiosos que se muestran al presionar el botón
const datosCuriosos = [
  "El récord de vida más larga de hermanos siameses lo tuvieron Ronnie y Donnie Galyon, que vivieron unidos 68 años.",
  "Abigail y Brittany Hensel, gemelas dicéfalas, aprendieron a manejar usando cada una un pedal distinto.",
  "En el siglo XIX, Chang y Eng Bunker llegaron a jugar al ajedrez y al bádminton frente a público pagante.",
  "La palabra 'toracópago' viene del griego: 'thorax' (pecho) y 'pagos' (unido).",
  "Millie y Christine McKoy, hermanas pigópagas del siglo XIX, cantaban a dos voces al mismo tiempo en sus shows.",
  "No todas las cirugías de separación buscan que ambos sobrevivan: a veces se prioriza salvar a uno de los dos hermanos.",
  "Existen registros de intentos de separación de hermanos siameses desde el siglo X en el Medio Oriente."
];

let ultimoIndice = -1;

function mostrarDato() {
  const contenedor = document.getElementById("dato-curioso");

  let indice;
  do {
    indice = Math.floor(Math.random() * datosCuriosos.length);
  } while (indice === ultimoIndice && datosCuriosos.length > 1);
  ultimoIndice = indice;

  contenedor.textContent = "💡 " + datosCuriosos[indice];
  contenedor.hidden = false;
}

// Navegación entre pestañas
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
