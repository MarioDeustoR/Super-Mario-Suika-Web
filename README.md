# 🍉 Super Mario Suika - Web Edition

Un clon de navegador del popular "Suika Game" (Juego de la Sandía), tematizado con elementos y personajes del universo de Super Mario. 

## 🚀 Características
* **Físicas dinámicas:** Gravedad, rebotes y colisiones gestionadas mediante el motor Matter.js.
* **Mecánica Suika:** Fusiona dos objetos idénticos para evolucionarlos al siguiente nivel y sumar puntos.
* **Rendimiento optimizado:** Motor de renderizado Phaser 3 ajustado para mantener 60 FPS estables sin saturar el navegador.
* **Totalmente estático:** Jugable directamente desde cualquier navegador web moderno sin necesidad de instalaciones pesadas.

## 🛠️ Tecnologías Utilizadas
* **HTML5 / CSS3:** Estructura y diseño de la vista del juego.
* **JavaScript (ES6):** Lógica principal del videojuego y control del bucle (game loop).
* **Phaser 3:** Framework para el renderizado del lienzo (canvas) en 2D y la gestión de *assets*.
* **Matter.js:** Motor de físicas 2D que calcula el comportamiento espacial de las fusiones.

## 🎮 Cómo Jugar
1. Mueve el ratón (o toca la pantalla) para mover la nube superior.
2. Haz clic izquierdo para dejar caer el personaje.
3. Cuando dos personajes iguales entran en contacto, se combinan formando uno de mayor tamaño.
4. El juego termina si los objetos se acumulan y superan el límite superior del contenedor.
5. ¡Consigue la puntuación más alta posible logrando la fusión máxima!

## 💻 Instalación y Ejecución
Al ser un proyecto web basado en Canvas, los navegadores bloquean la carga de imágenes locales por seguridad (CORS) si abres el archivo directamente. Para ejecutarlo:

1. Clona este repositorio: 
   `git clone https://github.com/MarioDeustoR/Super-Mario-Suika-Web.git`
2. Abre la carpeta del proyecto en Visual Studio Code.
3. Inicia la aplicación utilizando la extensión **Live Server** (clic derecho en `index.html` > *Open with Live Server*).

---
**Desarrollador:** Mario Deusto
**Contexto Académico:** Desarrollo de Aplicaciones Multiplataforma (DAM) - IES San Vicente