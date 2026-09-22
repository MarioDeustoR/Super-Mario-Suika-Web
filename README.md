# 🍄 Super Mario Suika (Web & Android Mobile App)

A cross-platform clone of the popular "Suika Game" set in the Super Mario Bros universe. Developed as a pure HTML5 canvas game and successfully packaged as a native Android application using Apache Cordova.

## 🎮 About the Project
This project explores physics-based puzzle mechanics where the goal is to drop and merge identical items to score points. The architecture demonstrates a seamless transition from browser-based rendering to mobile deployment, ensuring 100% responsive design and touch-control compatibility.

## 🏗️ Software Architecture & Tech Stack
* **Game Engine:** Phaser 3 (WebGL/Canvas rendering).
* **Physics Engine:** Matter.js (Rigid body simulation, gravity, and complex collision management).
* **Core Logic:** Modular Vanilla JavaScript, structurally separated by game lifecycle phases (Preload, Create, Update) for maintainability.
* **Mobile Packaging (DevOps):** Apache Cordova. Configured for Android platform deployment with native plugins integrated (Device, SplashScreen, Vibration).

## ✨ Main Features
* **Cross-Platform Execution:** Playable via desktop browsers (mouse events) and mobile devices (touch pointer events) with automatic screen scaling and aspect-ratio retention.
* **Dynamic Collision & Merging:** Real-time object pooling and event-driven merging algorithms using Matter.js collision pair detection.
* **Lighting & FX:** Implementation of 2D dynamic lighting (`Light2D` pipeline) tracking the active pointer, object glow post-FX, and ambient audio management.

## ⚙️ Installation & Usage

### Prerequisites
- Any modern web browser (Chrome, Firefox, Edge, etc.).
- *(Optional)* A local web server like Live Server in VS Code for the best experience.

### Running the Game
1. Clone the repository:
   `git clone https://github.com/tu-usuario/suika-web.git`
2. Navigate to the project folder.
3. Simply double-click the `index.html` file to open it in your browser and start playing.
