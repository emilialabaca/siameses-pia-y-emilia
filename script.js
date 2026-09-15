:root {
  --color-fondo: #fdf3df;
  --color-acento: #0e8f7d;
  --color-acento-2: #e67e5a;
  --color-texto: #2b2b2b;
}

* {
  box-sizing: border-box;
}

body {
  font-family: "Source Sans 3", sans-serif;
  text-align: center;
  padding: 40px 20px 80px;
  margin: 0;
  color: var(--color-texto);
  background-color: var(--color-fondo);
  transition: background-color 0.4s ease;
}

h1, h2, h3 {
  font-family: "Fraunces", serif;
}

header {
  margin-bottom: 32px;
}

.etiqueta {
  font-family: "Poppins", sans-serif;
  font-size: 0.75rem;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: var(--color-acento);
  font-weight: 600;
  margin-bottom: 6px;
}

h1 {
  color: var(--color-acento);
  font-weight: 700;
  font-size: 2.4rem;
  margin: 0 0 10px;
}

.subtitulo {
  font-family: "Source Sans 3", sans-serif;
  color: #555;
  max-width: 560px;
  margin: 0 auto 20px;
  line-height: 1.5;
}

button {
  font-family: "Poppins", sans-serif;
  padding: 10px 22px;
  font-size: 15px;
  font-weight: 600;
  border: none;
  border-radius: 8px;
  background-color: var(--color-acento);
  color: #fff;
  cursor: pointer;
  transition: transform 0.15s ease, background-color 0.2s ease;
}

button:hover {
  background-color: var(--color-acento-2);
  transform: translateY(-2px);
}

main {
  max-width: 820px;
  margin: 0 auto;
  text-align: left;
}

/* Pestañas */
.pestanas {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  justify-content: center;
  margin-bottom: 24px;
}

.pestana {
  font-family: "Poppins", sans-serif;
  background-color: transparent;
  color: var(--color-acento);
  border: 2px solid var(--color-acento);
  border-radius: 999px;
  padding: 8px 16px;
  font-size: 0.85rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
}

.pestana:hover {
  background-color: rgba(14, 143, 125, 0.1);
}

.pestana.activa {
  background-color: var(--color-acento);
  color: #fff;
}

.panel {
  display: none;
  animation: aparecer 0.35s ease;
}

.panel.activa {
  display: block;
}

@keyframes aparecer {
  from { opacity: 0; transform: translateY(6px); }
  to { opacity: 1; transform: translateY(0); }
}

/* Tarjetas generales */
.tarjeta {
  background-color: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(14, 143, 125, 0.15);
  border-radius: 14px;
  padding: 26px 30px;
  margin-bottom: 20px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.05);
}

.tarjeta h2 {
  color: var(--color-acento);
  margin-top: 0;
}

.tarjeta p {
  line-height: 1.6;
}

/* Introducción con ilustración */
.destacada {
  display: flex;
  gap: 24px;
  align-items: center;
  flex-wrap: wrap;
}

.ilustracion {
  flex: 0 0 180px;
  max-width: 180px;
}

.ilustracion svg {
  width: 100%;
  height: auto;
}

.texto-destacado {
  flex: 1 1 320px;
}

/* Datos rápidos */
.intro-panel {
  font-family: "Poppins", sans-serif;
  color: #555;
  margin-bottom: 16px;
}

.grid-datos {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 16px;
}

.dato {
  text-align: center;
  padding: 22px 16px;
}

.numero {
  display: block;
  font-family: "Fraunces", serif;
  font-size: 1.8rem;
  font-weight: 700;
  color: var(--color-acento-2);
  margin-bottom: 8px;
}

.dato p {
  font-size: 0.88rem;
  color: #444;
  margin: 0;
}

/* Tipos */
.datos {
  padding-left: 20px;
  line-height: 1.6;
}

.datos li {
  margin-bottom: 8px;
}

.grid-tipos {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 16px;
}

.tipo {
  background-color: rgba(14, 143, 125, 0.06);
  border-radius: 12px;
  padding: 18px 18px 20px;
  text-align: center;
}

.icono-tipo {
  width: 56px;
  height: 56px;
  margin: 0 auto 10px;
}

.icono-tipo svg {
  width: 100%;
  height: 100%;
}

.tipo h3 {
  margin: 0 0 6px;
  color: #0b7565;
  font-size: 1.05rem;
}

.tipo p {
  margin: 0;
  font-size: 0.9rem;
  line-height: 1.5;
  color: #333;
  text-align: left;
}

/* Casos conocidos */
.grid-casos {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 16px;
}

.caso {
  margin-bottom: 0;
}

.caso h3 {
  color: var(--color-acento-2);
  margin: 0 0 4px;
}

.fecha {
  font-family: "Poppins", sans-serif;
  font-size: 0.78rem;
  color: #888;
  margin: 0 0 10px;
}

footer {
  margin-top: 40px;
  text-align: center;
  font-size: 0.85rem;
  color: #777;
}
