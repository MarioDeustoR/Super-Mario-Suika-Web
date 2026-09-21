# 🍄 Super Mario Suika Web

A web-based clone of the popular "Suika Game" (Watermelon Game) set in the Super Mario Bros universe. Developed entirely with web technologies and designed to be 100% responsive, working seamlessly on both desktop browsers and mobile devices.

## 🎮 About the Project

This project is a physics-based puzzle game where the goal is to drop different items (based on Mario power-ups and characters) into a pipe. When two identical items collide, they merge to create the next larger item, awarding points. The game ends if the items pile up and cross the top limit.

## ✨ Features

- **Realistic Physics:** Uses the Matter.js engine to simulate gravity, bounce, and friction of falling and colliding objects.
- **Responsive Design (Cross-platform):** Scales automatically to fit any screen size. Playable with a mouse on PC and touch controls on smartphones and tablets.
- **Sound Effects:** Integrated audio for merging, game over, and background music (managed by the browser's AudioContext).
- **Dynamic Collision Management:** Real-time object merging with a scalable scoring system.

## 🛠️ Technologies Used

- **HTML5 & CSS3:** Adaptive structure and interface that removes borders and maximizes the playable area.
- **Vanilla JavaScript:** Core game logic.
- **Phaser 3:** Main framework for canvas/WebGL rendering and asset management (images and audio).
- **Matter.js:** Physics engine integrated within Phaser for rigid body and collision management.

## 🚀 How to Play (Local Installation)

Since it is a pure web game, it doesn't require complex installations or compilers.

1. Clone this repository to your machine:
   ```bash
   git clone [https://github.com/your-username/super-mario-suika-web.git](https://github.com/your-username/super-mario-suika-web.git)