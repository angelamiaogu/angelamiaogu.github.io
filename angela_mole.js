let score = 0;
const gameArea = document.getElementById("game-area");
const scoreDisplay = document.getElementById("score");

function spawnMole() {
    const mole = document.createElement("div");
    mole.className = "mole";

    // Random position
    mole.style.top = Math.random() * 350 + "px";
    mole.style.left = Math.random() * 350 + "px";

    // Add click event
    mole.addEventListener("click", () => {
        score++;
        scoreDisplay.textContent = score;
        gameArea.removeChild(mole); // Remove mole
    });

    gameArea.appendChild(mole);

    // Remove mole after 2 seconds
    setTimeout(() => {
        if (gameArea.contains(mole)) {
            gameArea.removeChild(mole);
        }
    }, 2000);
}

// Spawn a new mole every second
setInterval(spawnMole, 1000);