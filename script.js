// Paletas: fondo de página + acento principal + acento secundario
// Colores que se van alternando
const colores = [
    {
        fondo: "#fff8f3",
        principal: "#c65f72",
        oscuro: "#8f3e50",
        secundario: "#f4d7d8"
    },
    {
        fondo: "#f3f8ff",
        principal: "#5279b8",
        oscuro: "#34537f",
        secundario: "#d9e6f7"
    },
    {
        fondo: "#f5fbf6",
        principal: "#5b9270",
        oscuro: "#37664b",
        secundario: "#dcefe2"
    },
    {
        fondo: "#fff9ed",
        principal: "#c28a3e",
        oscuro: "#8a6028",
        secundario: "#f4e4c5"
    },
    {
        fondo: "#f8f3ff",
        principal: "#8665ad",
        oscuro: "#5b4378",
        secundario: "#e7dcf4"
    }
];

let colorActual = 0;

const boton = document.getElementById("colorButton");

boton.addEventListener("click", function () {

    colorActual++;

    if (colorActual >= colores.length) {
        colorActual = 0;
    }

    const nuevoColor = colores[colorActual];

    document.documentElement.style.setProperty(
        "--fondo",
        nuevoColor.fondo
    );

    document.documentElement.style.setProperty(
        "--principal",
        nuevoColor.principal
    );

    document.documentElement.style.setProperty(
        "--principal-oscuro",
        nuevoColor.oscuro
    );

    document.documentElement.style.setProperty(
        "--secundario",
        nuevoColor.secundario
    );

});
